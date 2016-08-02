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
        return window.maju.on this, eventName, cb
      el.attr = ( key, value ) ->
        return window.maju.attr this, key, value
      el.html = ( value ) ->
        return window.maju.html this, value
      el.prepend = ( prependEl ) ->
        return window.maju.prepend this, prependEl
      el.append = ( appendEl ) ->
        return window.maju.append this, appendEl
      el.after = ( afterEl ) ->
        return window.maju.after this, afterEl
      el.before = ( beforeEl ) ->
        return window.maju.before this, beforeEl
      el_arr.push el
    el_arr.get = ( index ) ->
      return this[index]
  el_arr
