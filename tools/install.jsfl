(function() {
  // Copy the script to the Tools folder
  var filename = 'EgretAnimatePostPublish.jsfl';
  var orig = fl.scriptURI.replace('install.jsfl', filename);
  var dest = fl.configURI + "Tools/" + filename;

  // Force replace when installing
  if (FLfile.exists(dest)) {
    FLfile.remove(dest);
  }

  FLfile.copy(orig, dest);

  alert("EgretAnimate Publish script installed. Restart Flash.");

  // Restart Flash
  fl.quit();

}());
