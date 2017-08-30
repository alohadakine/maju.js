window.re = function() {};
window.re.prototype.adBlockEnabled = function(cb) {
        var js = document.createElement('script');
        js.src = 'https://js.revsci.net/gateway/gw.js';
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

window.re.prototype.after = function(el, afterEl) {
	el.parentNode.insertBefore(afterEl, el.nextElementSibling);
	return el;
};

window.re.prototype.ajax = function(opts) {
	var formatParams, getTimestamp, header, params, xhr;
	opts = opts || {};
	opts.method = opts.method || 'GET';
	opts.method = opts.method.toUpperCase();
	opts.cb = opts.cb || function() {};
	opts.params = opts.params || {};
	opts.requestContentType = opts.requestContentType || 'application/x-www-form-urlencoded';
	getTimestamp = function() {
		return Math.floor(Date.now() / 1000);
	};
	formatParams = function(params) {
		var arr, key;
		arr = [];
		for (key in params) {
			arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
		}
		return arr;
	};
	params = formatParams(opts.params);
	xhr = new XMLHttpRequest();
	if (opts.method === 'GET' && params.length) {
		opts.url = opts.url + '?' + params.join('&');
	}
	if (opts.method === 'GET' && opts.cache === false) {
		if (opts.url.indexOf('?') === -1) {
			opts.url = opts.url + '?_nocache=' + getTimestamp();
		} else {
			opts.url = opts.url + '&_nocache=' + getTimestamp();
		}
	}
	xhr.open(opts.method, opts.url);
	xhr.setRequestHeader('Content-type', opts.requestContentType);
	if (opts.headers) {
		for (header in opts.headers) {
			xhr.setRequestHeader(header.key, header.value);
		}
	}
	if (opts.method === 'GET') {
		xhr.send(null);
	} else {
		if (params.length) {
			xhr.send(params.join('&'));
		} else {
			xhr.send(null);
		}
	}
	xhr.onreadystatechange = function() {
		var DONE, OK, err;
		DONE = 4;
		OK = 200;
		err = false;
		if (xhr.readyState === DONE) {
			if (xhr.status !== OK) {
				err = xhr.status;
			}
			opts.cb(err, xhr.responseText);
		}
	};
};

window.re.prototype.append = function(el, appendEl) {
	el.appendChild(appendEl);
	return el;
};

window.re.prototype.attr = function(el, key, value) {
	var returnvalue;
	returnvalue = el;
	if (value) {
		el.setAttribute(key, value);
	} else {
		returnvalue = el.getAttribute(key);
	}
	return returnvalue;
};

window.re.prototype.before = function(el, beforeEl) {
	el.parentNode.insertBefore(beforeEl, el);
	return el;
};

window.re.prototype.create = function(name, contents, attrs, is) {
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
		if (typeof contents === 'string') {
			el.innerHTML = contents;
		} else if (typeof contents === 'object' && contents.length) {
			contents.forEach(contentsCallback);
		} else if (typeof contents === 'object' && !contents.length) {
			el.appendChild(contents);
		}
	}
	if (attrs) {
		attrs.forEach(attrsCallback);
	}
	return window.re.find(el).get(0);
};

window.re.prototype.domready = function(cb) {
	if (document.readyState === 'complete') {
		return window.setTimeout(cb, 1);
	} else {
		document.addEventListener('DOMContentLoaded', function() {
			cb();
		});
	}
};

window.re.prototype.each = function(arr, cb) {
	var child, i, j, len;
	for (i = j = 0, len = arr.length; j < len; i = ++j) {
		child = arr[i];
		cb(child, i);
	}
	return arr;
};

window.re.prototype.find = function(sel, ref) {
	var el, el_arr, els, i, len;
	el_arr = [];
	if (sel) {
		if (typeof sel !== 'object') {
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
			el = els[i];
			el.find = function(sel) {
				return window.re.find(sel, this);
			};
			el.on = function(eventName, cb) {
				return window.re.on(this, eventName, cb);
			};
			el.attr = function(key, value) {
				return window.re.attr(this, key, value);
			};
			el.html = function(value) {
				return window.re.html(this, value);
			};
			el.prepend = function(prependEl) {
				return window.re.prepend(this, prependEl);
			};
			el.append = function(appendEl) {
				return window.re.append(this, appendEl);
			};
			el.after = function(afterEl) {
				return window.re.after(this, afterEl);
			};
			el.before = function(beforeEl) {
				return window.re.before(this, beforeEl);
			};
			el.parent = function() {
				return window.re.parent(this);
			};
			el.next = function() {
				return window.re.next(this);
			};
			el.prev = function() {
				return window.re.prev(this);
			};
			el.nodes = function() {
				return window.re.nodes(this);
			};
			el_arr.push(el);
		}
		el_arr.each = function(cb) {
			return window.re.each(this, cb);
		};
		el_arr.get = function(index) {
			return this[index];
		};
	}
	return el_arr;
};

window.re.prototype.getFileContents = function(file, cb) {
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (){
      cb(false, fileRef);
    };
    reader.onerror = function (){
      cb("Error reading file", fileRef);
    };
  } else {
    cb("fileRef not found");
  }
};

window.re.prototype.html = function(el, value) {
	var returnvalue;
	returnvalue = el;
	if (value) {
		el.innerHTML = value;
	} else {
		return el.innerHTML;
	}
	return returnvalue;
};

window.re.prototype.loadjs = function(urls, cb) {
	var appendscript, i, len, url, y;
	y = window.re;
	appendscript = function(url, cb) {
		var s;
		s = y.create('script').attr('type', 'text/javascript').attr('async', 'true').attr('src', url);
		if (cb) {
			s.on('error', function() {
				cb(true, this);
			});
			s.on('load', function() {
				cb(false, this);
			});
		}
		return y.find('script').get(0).prepend(s);
	};
	if (typeof urls === 'string') {
		urls = [urls];
	}
	for (i = 0, len = urls.length; i < len; i++) {
		url = urls[i];
		appendscript(url, cb);
	}
};

window.re.prototype.next = function(el) {
	return window.re.find(el.nextElementSibling).get(0);
};

window.re.prototype.nodes = function(el) {
	var child, child_arr, i, len, ref;
	child_arr = [];
	ref = el.children;
	for (i = 0, len = ref.length; i < len; i++) {
		child = ref[i];
		child_arr.push(window.re.find(child).get(0));
	}
	return child_arr;
};

window.re.prototype.on = function(el, eventName, cb) {
	el.addEventListener(eventName, cb, false);
	return el;
};

window.re.prototype.parent = function(el) {
	return window.re.find(el.parentNode).get(0);
};

window.re.prototype.plugins = {};
window.re.prototype.prepend = function(el, prependEl) {
	el.parentNode.insertBefore(prependEl, el);
	return el;
};

window.re.prototype.prev = function(el) {
	return window.re.find(el.previousElementSibling).get(0);
};

window.re = new window.re();
