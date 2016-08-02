window.maju.prototype.prepend = ( el, prependEl ) ->
  el.parentNode.insertBefore prependEl, el
  return el
