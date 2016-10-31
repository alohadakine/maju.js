window.yaju.prototype.loadjs = ( urls, cb ) ->
  y = window.yaju
  appendscript = ( url, cb ) ->
    s = y.create 'script'
      .attr 'type', 'text/javascript'
      .attr 'async', 'true'
      .attr 'src', url
    if cb
      s.on 'error', () ->
        cb true, this
        return
      s.on 'load', () ->
        cb false, this
        return
    y.find('script').get(0).prepend s
  if typeof urls is 'string'
    urls = [ urls ]
  for url in urls
    appendscript url, cb
  return
