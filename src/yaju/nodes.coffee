window.yaju.prototype.children = ( el ) ->
  child_arr = []
  for child in el.children
    child_arr.push window.yaju.find(child).get(0)
  child_arr
