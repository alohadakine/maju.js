re.prototype.find = function(sel, ref) {
	var el_arr, els, i, len;
	el_arr = [];
        var forEachElementCallback = function(el) {
                el.find = function(sel) {
                        return re.find(sel, this);
                };
                el.on = function(eventName, cb) {
                        return re.on(this, eventName, cb);
                };
                el.attr = function(key, value) {
                        return re.attr(this, key, value);
                };
                el.html = function(value) {
                        return re.html(this, value);
                };
                el.prepend = function(prependEl) {
                        return re.prepend(this, prependEl);
                };
                el.append = function(appendEl) {
                        return re.append(this, appendEl);
                };
                el.after = function(afterEl) {
                        return re.after(this, afterEl);
                };
                el.before = function(beforeEl) {
                        return re.before(this, beforeEl);
                };
                el.parent = function() {
                        return re.parent(this);
                };
                el.next = function() {
                        return re.next(this);
                };
                el.prev = function() {
                        return re.prev(this);
                };
                el.nodes = function() {
                        return re.nodes(this);
                };
                el_arr.push(el);
        };
	if (sel) {
		if (typeof sel !== "object") {
			if (ref) {
				els = ref.querySelectorAll(sel);
			} else {
				els = document.querySelectorAll(sel);
			}
		} else {
			if (sel.length) {
				els = sel;
			} else {
				els = [sel];
			}
		}
		for (i = 0, len = els.length; i < len; i++) {
			forEachElementCallback(els[i]);
		}
		el_arr.each = function(cb) {
			return re.each(this, cb);
		};
		el_arr.get = function(index) {
			return this[index];
		};
	}
	return el_arr;
};

