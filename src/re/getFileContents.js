window.re.prototype.getFileContents = function(file, cb) {
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (){
      cb(false, fileRef);
    };
    reader.onerror = function (){
      cb("Error reading file", fileRef);
    };
  } else {
    cb("fileRef not found");
  }
};

