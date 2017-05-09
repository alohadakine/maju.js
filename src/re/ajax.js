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

