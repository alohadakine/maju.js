re.prototype.next = function(el) {
	return re.find(el.nextElementSibling).get(0);
};

