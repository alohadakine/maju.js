window.maju.prototype.find = ( sel, ref ) ->
  el_arr = []
  if sel
    if ref
      els = ref.querySelectorAll sel
    else
      els = document.querySelectorAll sel
    for el in els
      el.find = ( sel ) ->
        return window.maju.find sel, this
      el_arr.push el
    el_arr.get = ( index ) ->
      return this[index]
  el_arr
