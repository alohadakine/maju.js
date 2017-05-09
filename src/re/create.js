window.re.prototype.create = function(name) {
	var el;
	el = document.createElement(name);
	return window.re.find(el).get(0);
};

