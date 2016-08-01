window.maju.prototype.ajax = ( opts ) ->
  opts = opts || {}
  opts.cb = opts.cb || () -> return
  xhr = new XMLHttpRequest()
  xhr.open 'GET', opts.url
  xhr.send null
  xhr.onreadystatechange = () ->
    DONE = 4 # readyState 4 means the request is done.
    OK = 200 # status 200 is a successful return.
    err = false
    if xhr.readyState == DONE
      if xhr.status != OK
        err = xhr.status
      opts.cb err, xhr.responseText
    return
  return
