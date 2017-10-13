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

