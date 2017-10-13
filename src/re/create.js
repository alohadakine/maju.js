re.prototype.create = function(name, contents, attrs, is) {
	var el, contentsCallback, attrsCallback;
  if (is)
    el = document.createElement(name, is);
  else
    el = document.createElement(name);
	contentsCallback = function(content) {
		el.appendChild(content);
	};
	attrsCallback = function(attr) {
		el.setAttribute(attr[0], attr[1]);
	};
	if (contents) {
		if (typeof contents === "string") {
			el.innerHTML = contents;
		} else if (typeof contents === "object" && contents.length) {
			contents.forEach(contentsCallback);
		} else if (typeof contents === "object" && !contents.length) {
			el.appendChild(contents);
		}
	}
	if (attrs) {
		attrs.forEach(attrsCallback);
	}
	return re.find(el).get(0);
};

