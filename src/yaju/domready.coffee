window.yaju.prototype.domready = ( cb ) ->
  if document.readyState == 'complete'
    # Handle it asynchronously to allow scripts the opportunity to delay ready
    return window.setTimeout cb, 1
  else
    document.addEventListener 'DOMContentLoaded', () ->
      cb()
      return
  return
