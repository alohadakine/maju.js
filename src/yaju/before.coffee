window.yaju.prototype.before = ( el , beforeEl ) ->
  el.parentNode.insertBefore beforeEl, el
  el
