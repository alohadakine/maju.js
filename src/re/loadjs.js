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

