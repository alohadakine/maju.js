window.yaju.prototype.prepend = ( el, prependEl ) ->
  el.parentNode.insertBefore prependEl, el
  return el
