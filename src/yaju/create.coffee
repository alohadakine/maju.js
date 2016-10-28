window.yaju.prototype.create = ( name ) ->
  el = document.createElement name
  window.yaju.find(el).get(0)
