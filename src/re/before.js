re.prototype.before = function(el, beforeEl) {
	el.parentNode.insertBefore(beforeEl, el);
	return el;
};

