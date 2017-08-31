window.re.prototype.append = function(el, appendEl) {
  if (appendEl.length) {
    appendEl.forEach(function(tmp){
      el.appendChild(tmp);
    });
  } else {
    el.appendChild(appendEl);
  }
	return el;
};

