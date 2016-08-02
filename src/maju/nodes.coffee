window.maju.prototype.children = ( el ) ->
  child_arr = []
  for child in el.children
    child_arr.push window.maju.find(child).get(0)
  child_arr
