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

