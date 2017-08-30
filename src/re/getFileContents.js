window.re.prototype.getFileContents = function(file, cb) {
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function(evt) {
      cb(false, evt.target.result, fileRef);
    };
    reader.onerror = function() {
      cb("Error reading file", null, fileRef);
    };
  } else {
    cb("file ref not found", null, null);
  }
};

