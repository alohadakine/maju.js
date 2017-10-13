re.prototype.after = function(el, afterEl) {
	el.parentNode.insertBefore(afterEl, el.nextElementSibling);
	return el;
};

