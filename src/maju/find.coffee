window.maju.prototype.find = ( sel, ref ) ->
  el_arr = []
  if sel
    if typeof sel != 'object'
      if ref
        els = ref.querySelectorAll sel
      else
        els = document.querySelectorAll sel
    else
      if sel.length
        els = sel
      else
        els = [sel]
    for el in els
      el.find = ( sel ) ->
        return window.maju.find sel, this
      el.on = ( eventName, cb ) ->
        window.maju.on el, eventName, cb
        return
      el_arr.push el
    el_arr.get = ( index ) ->
      return this[index]
  el_arr
