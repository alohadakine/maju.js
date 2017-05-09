window.re.prototype.find = function(sel, ref) {
	var el, el_arr, els, i, len;
	el_arr = [];
	if (sel) {
		if (typeof sel !== 'object') {
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
			el = els[i];
			el.find = function(sel) {
				return window.re.find(sel, this);
			};
			el.on = function(eventName, cb) {
				return window.re.on(this, eventName, cb);
			};
			el.attr = function(key, value) {
				return window.re.attr(this, key, value);
			};
			el.html = function(value) {
				return window.re.html(this, value);
			};
			el.prepend = function(prependEl) {
				return window.re.prepend(this, prependEl);
			};
			el.append = function(appendEl) {
				return window.re.append(this, appendEl);
			};
			el.after = function(afterEl) {
				return window.re.after(this, afterEl);
			};
			el.before = function(beforeEl) {
				return window.re.before(this, beforeEl);
			};
			el.parent = function() {
				return window.re.parent(this);
			};
			el.next = function() {
				return window.re.next(this);
			};
			el.prev = function() {
				return window.re.prev(this);
			};
			el.nodes = function() {
				return window.re.nodes(this);
			};
			el_arr.push(el);
		}
		el_arr.each = function(cb) {
			return window.re.each(this, cb);
		};
		el_arr.get = function(index) {
			return this[index];
		};
	}
	return el_arr;
};

