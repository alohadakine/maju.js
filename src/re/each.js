re.prototype.each = function(arr, cb) {
	var child, i, j, len;
	for (i = j = 0, len = arr.length; j < len; i = ++j) {
		child = arr[i];
		cb(child, i);
	}
	return arr;
};

