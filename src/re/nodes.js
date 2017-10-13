re.prototype.nodes = function(el) {
	var child, child_arr, i, len, ref;
	child_arr = [];
	ref = el.children;
	for (i = 0, len = ref.length; i < len; i++) {
		child = ref[i];
		child_arr.push(re.find(child).get(0));
	}
	return child_arr;
};

