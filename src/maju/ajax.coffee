window.maju.prototype.ajax = ( opts ) ->
  opts = opts || {}
  opts.method = opts.method.toUpperCase() || 'GET'
  opts.cb = opts.cb || () -> return
  opts.params = opts.params || {}
  getTimestamp = () ->
    Math.floor(Date.now() / 1000)
  formatParams = ( params ) ->
    arr = []
    for key of params
      arr.push(
        encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
      )
    arr
  params = formatParams opts.params
  xhr = new XMLHttpRequest()
  if opts.method == 'GET' && params.length
    opts.url = opts.url + '?' + params.join '&'
  if opts.method == 'GET' && opts.cache == false
    if opts.url.indexOf('?') == -1
      opts.url = opts.url + '?_nocache=' + getTimestamp()
    else
      opts.url = opts.url + '&_nocache=' + getTimestamp()
  xhr.open opts.method, opts.url
  if opts.headers
    for header of opts.headers
      xhr.setRequestHeader header.key, header.value
  if opts.method == 'GET'
    xhr.send null
  else
    if params.length
      xhr.send '?' + params.join '&'
    else
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
