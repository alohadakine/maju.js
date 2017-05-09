window.re.prototype.prepend = function(el, prependEl) {
	el.parentNode.insertBefore(prependEl, el);
	return el;
};

