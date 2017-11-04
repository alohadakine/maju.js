var re = function() {};
re.prototype.adBlockEnabled = function(cb) {
        var js = document.createElement("script");
        js.src = "https://js.revsci.net/gateway/gw.js";
        js.onerror = function() {
                // AdBlock is enabled
                cb(true);
                // Clean up
                this.parentNode.removeChild(this);
        };
        js.onload = function() {
                // AdBlock is NOT enabled
                cb(false);
                // Clean up
                this.parentNode.removeChild(this);
        };
        document.body.appendChild(js);
};

re.prototype.after = function(el, afterEl) {
	el.parentNode.insertBefore(afterEl, el.nextElementSibling);
	return el;
};

re.prototype.ajax = function(opts) {
	var formatParams, getTimestamp, header, params, xhr;
	opts = opts || {};
	opts.method = opts.method || "GET";
	opts.method = opts.method.toUpperCase();
	opts.cb = opts.cb || function() {};
	opts.params = opts.params || {};
	opts.requestContentType = opts.requestContentType || "application/x-www-form-urlencoded";
	getTimestamp = function() {
		return Math.floor(Date.now() / 1000);
	};
	formatParams = function(params) {
		var arr, key;
		arr = [];
		for (key in params) {
			arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
		}
		return arr;
	};
	params = formatParams(opts.params);
	xhr = new XMLHttpRequest();
	if (opts.method === "GET" && params.length) {
		opts.url = opts.url + "?" + params.join("&");
	}
	if (opts.method === "GET" && opts.cache === false) {
		if (opts.url.indexOf("?") === -1)
			opts.url = opts.url + "?_nocache=" + getTimestamp();
		else
			opts.url = opts.url + "&_nocache=" + getTimestamp();
	}
	xhr.open(opts.method, opts.url);
	xhr.setRequestHeader("Content-type", opts.requestContentType);
	if (opts.headers) {
		for (header in opts.headers) {
			xhr.setRequestHeader(header.key, header.value);
		}
	}
	if (opts.method === "GET") {
		xhr.send(null);
	} else {
		if (params.length)
			xhr.send(params.join("&"));
		else
			xhr.send(null);
	}
	xhr.onreadystatechange = function() {
		var DONE, OK, err;
		DONE = 4;
		OK = 200;
		err = false;
		if (xhr.readyState === DONE) {
			if (xhr.status !== OK)
				err = xhr.status;
			opts.cb(err, xhr.responseText);
		}
	};
};

re.prototype.append = function(el, appendEl) {
        if (appendEl.length) {
                appendEl.forEach(function(tmp) {
                        el.appendChild(tmp);
                });
        } else {
                el.appendChild(appendEl);
        }
        return el;
};

re.prototype.attr = function(el, key, value) {
	var returnvalue;
	returnvalue = el;
	if (value) {
		el.setAttribute(key, value);
	} else {
		returnvalue = el.getAttribute(key);
	}
	return returnvalue;
};

re.prototype.before = function(el, beforeEl) {
	el.parentNode.insertBefore(beforeEl, el);
	return el;
};

re.prototype.compareJson = function(el) {
        var aIsInB = function(a, b) {
                for (var prop in a) {
                        if (a.hasOwnProperty(prop)) {
                                if (b.hasOwnProperty(prop)) {
                                        if (typeof a[prop] === "object") {
                                                if (!aIsInB(a[prop], b[prop]))
                                                        return false;
                                        } else {
                                                if (a[prop] !== b[prop])
                                                        return false;
                                        }
                                } else {
                                        return false;
                                }
                        }
                }
                return true;
        };
        return (aIsInB(a, b) && aIsInB(b, a));
};

re.prototype.create = function(name, contents, attrs, is) {
	var el, contentsCallback, attrsCallback;
  if (is)
    el = document.createElement(name, is);
  else
    el = document.createElement(name);
	contentsCallback = function(content) {
		el.appendChild(content);
	};
	attrsCallback = function(attr) {
		el.setAttribute(attr[0], attr[1]);
	};
	if (contents) {
		if (typeof contents === "string") {
			el.innerHTML = contents;
		} else if (typeof contents === "object" && contents.length) {
			contents.forEach(contentsCallback);
		} else if (typeof contents === "object" && !contents.length) {
			el.appendChild(contents);
		}
	}
	if (attrs) {
		attrs.forEach(attrsCallback);
	}
	return re.find(el).get(0);
};

re.prototype.domready = function(cb) {
	if (document.readyState === "complete") {
		return window.setTimeout(cb, 1);
	} else {
		document.addEventListener("DOMContentLoaded", function() {
			cb();
		});
	}
};

re.prototype.each = function(arr, cb) {
	var child, i, j, len;
	for (i = j = 0, len = arr.length; j < len; i = ++j) {
		child = arr[i];
		cb(child, i);
	}
	return arr;
};

re.prototype.find = function(sel, ref) {
	var el_arr, els, i, len;
	el_arr = [];
        var forEachElementCallback = function(el) {
                el.find = function(sel) {
                        return re.find(sel, this);
                };
                el.on = function(eventName, cb) {
                        return re.on(this, eventName, cb);
                };
                el.attr = function(key, value) {
                        return re.attr(this, key, value);
                };
                el.html = function(value) {
                        return re.html(this, value);
                };
                el.prepend = function(prependEl) {
                        return re.prepend(this, prependEl);
                };
                el.append = function(appendEl) {
                        return re.append(this, appendEl);
                };
                el.after = function(afterEl) {
                        return re.after(this, afterEl);
                };
                el.before = function(beforeEl) {
                        return re.before(this, beforeEl);
                };
                el.parent = function() {
                        return re.parent(this);
                };
                el.next = function() {
                        return re.next(this);
                };
                el.prev = function() {
                        return re.prev(this);
                };
                el.nodes = function() {
                        return re.nodes(this);
                };
                el_arr.push(el);
        };
	if (sel) {
		if (typeof sel !== "object") {
			if (ref) {
				els = ref.querySelectorAll(sel);
			} else {
				els = document.querySelectorAll(sel);
			}
		} else {
			if (sel.length) {
				els = sel;
			} else {
				els = [sel];
			}
		}
		for (i = 0, len = els.length; i < len; i++) {
			forEachElementCallback(els[i]);
		}
		el_arr.each = function(cb) {
			return re.each(this, cb);
		};
		el_arr.get = function(index) {
			return this[index];
		};
	}
	return el_arr;
};

re.prototype.getFileContents = function(file, cb) {
        if (file) {
                var reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = function(evt) {
                        cb(false, evt.target.result, file);
                };
                reader.onerror = function() {
                        cb("Error reading file", null, file);
                };
        } else {
                cb("file ref not found", null, null);
        }
};

re.prototype.getUnixtime = function() {
        return parseInt(Math.floor(Date.now() / 1000), 10);
};

re.prototype.html = function(el, value) {
	var returnvalue;
	returnvalue = el;
	if (typeof value === "string") {
		el.innerHTML = value;
	} else {
		return el.innerHTML;
	}
	return returnvalue;
};

re.prototype.loadjs = function(urls, cb) {
	var i, len, url;
	var appendscript = function(url, cb) {
		var s = re.create("script")
                        .attr("type", "text/javascript")
                        .attr("async", "true")
                        .attr("src", url);
		if (cb) {
			s.on("error", function() {
				cb(true, this);
			});
			s.on("load", function() {
				cb(false, this);
			});
		}
		return re.find("script").get(0).prepend(s);
	};
	if (typeof urls === "string") {
		urls = [urls];
	}
	for (i = 0, len = urls.length; i < len; i++) {
		url = urls[i];
		appendscript(url, cb);
	}
};

re.prototype.next = function(el) {
	return re.find(el.nextElementSibling).get(0);
};

re.prototype.nodes = function(el) {
	var child, child_arr, i, len, ref;
	child_arr = [];
	ref = el.children;
	for (i = 0, len = ref.length; i < len; i++) {
		child = ref[i];
		child_arr.push(re.find(child).get(0));
	}
	return child_arr;
};

re.prototype.on = function(el, eventName, cb) {
	el.addEventListener(eventName, cb, false);
	return el;
};

re.prototype.parent = function(el) {
	return re.find(el.parentNode).get(0);
};

re.prototype.plugins = {};
re.prototype.prepend = function(el, prependEl) {
	el.parentNode.insertBefore(prependEl, el);
	return el;
};

re.prototype.prev = function(el) {
	return re.find(el.previousElementSibling).get(0);
};

re.prototype.version = "1.0.0";
window.re = new window.re();
