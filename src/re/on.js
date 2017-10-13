re.prototype.on = function(el, eventName, cb) {
	el.addEventListener(eventName, cb, false);
	return el;
};

