window.yaju.prototype.html = ( el, value ) ->
  returnvalue = el
  if value
    el.innerHTML = value
  else
    return el.innerHTML
  returnvalue
