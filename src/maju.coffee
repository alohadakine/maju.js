window.maju = ( sel ) ->
  if sel
    els = document.querySelectorAll sel
    el_arr = []
    for el in els
      el.prototype.find = ( sel ) ->
        return this.querySelectorAll sel
      el_arr.push el
    return el_arr
  return
