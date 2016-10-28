window.yaju.prototype.each = ( arr, cb ) ->
  for child, i in arr
    cb child, i
  arr
