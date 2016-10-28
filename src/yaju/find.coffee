window.yaju.prototype.find = ( sel, ref ) ->
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
        return window.yaju.find sel, this
      el.on = ( eventName, cb ) ->
        return window.yaju.on this, eventName, cb
      el.attr = ( key, value ) ->
        return window.yaju.attr this, key, value
      el.html = ( value ) ->
        return window.yaju.html this, value
      el.prepend = ( prependEl ) ->
        return window.yaju.prepend this, prependEl
      el.append = ( appendEl ) ->
        return window.yaju.append this, appendEl
      el.after = ( afterEl ) ->
        return window.yaju.after this, afterEl
      el.before = ( beforeEl ) ->
        return window.yaju.before this, beforeEl
      el.parent = () ->
        return window.yaju.parent this
      el.next = () ->
        return window.yaju.next this
      el.prev = () ->
        return window.yaju.prev this
      el.nodes = () ->
        return window.yaju.nodes this
      el_arr.push el
    el_arr.each = ( cb ) ->
      return window.yaju.each this, cb
    el_arr.get = ( index ) ->
      return this[index]
  el_arr
