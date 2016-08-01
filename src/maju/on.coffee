window.maju.prototype.on = ( el, eventName, cb ) ->
  el.addEventListener eventName, cb, false
  el
