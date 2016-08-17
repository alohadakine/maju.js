LocalStorage = () ->
  localStorage = window.localStorage
  ApplyBackup = (backup, fClear, fOverwriteExisting) ->
    fClear = fClear || false
    fOverwriteExisting = fOverwriteExisting || false
    if fClear == true
      localStorage.clear()
    for key, value in backup
      if fOverwriteExisting == false && backup[key] != undefined
        continue
      localStorage.setItem key, value
    return
  GetBackup = () ->
    backup = {}
    for key, value of localStorage
      backup[key] = value
    return backup
  @GetRemainingSpace = ( cb ) ->
    itemBackup = localStorage.getItem ''
    increase = true
    data = '1'
    totalData = ''
    trytotalData = ''
    while true
      try
        trytotalData = totalData + data
        localStorage.setItem '', trytotalData
        totalData = trytotalData
        if increase
          data += data
      catch e
        if data.length < 2
          break
        increase = false
        data = data.substr data.length / 2
    if itemBackup == null
      localStorage.removeItem ''
    else
      localStorage.setItem '', itemBackup
    cb totalData.length
    return
  @GetMaximumSize = ( cb ) ->
    backup = GetBackup()
    localStorage.clear()
    max = @GetRemainingSpace ( max ) ->
      ApplyBackup backup
      cb max
      return
    return
  @
