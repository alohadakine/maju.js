window.yaju.prototype.after = ( el , afterEl ) ->
  el.parentNode.insertBefore afterEl, el.nextElementSibling
  el
