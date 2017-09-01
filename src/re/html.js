window.re.prototype.html = function(el, value) {
	var returnvalue;
	returnvalue = el;
	if (typeof value === "string") {
		el.innerHTML = value;
	} else {
		return el.innerHTML;
	}
	return returnvalue;
};

