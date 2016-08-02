window.maju.prototype.attr = ( el, key, value ) ->
  returnvalue = el
  if value
    el.setAttribute key, value
  else
    returnvalue = el.getAttribute key
  returnvalue
