var findLines = function(folderName){
  var fs = require("fs");
  var linesInFiles = fs.readdirSync("./files/week1", "utf8");
    // console.log(readFolder);
  var data = [];

    linesInFiles.forEach(function(linesInFiles){
      var files = fs.readFileSync("./files/week1/" + linesInFiles, "utf8");
        var linesInFilesAsync = files.split("\n");

          linesInFilesAsync.forEach(function(newLines){
            data.push(newLines);
          });
    });
return data;
};

// console.log(data);
exports.linesInFiles = function(folderName){
  var data = findLines(folderName);
  return data;
};

exports.linesInFilesAsync = function(folderName, callback){
  var dataT = findLines(folderName);
    callback(null, dataT);
    return dataT;
}
