const path = require('path');
const fs = require('fs');

module.exports = {
  validatePath: function(pathMd) {
    const extension = path.extname(pathMd);
    if (extension == '.md') {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  },

  absolutePath: function(absolutelink) {
    const absolute = path.resolve(absolutelink);
    console.log(absolute);
    return absolute;
  },

  readFileMd: function(pathMd) {
    return new Promise((resolve, reject) => {
      fs.readFile(pathMd, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
};

// function readLinks (){
//     fs.readlink("/home/laboratoria-180/Escritorio/GDL002-md-links/src/prueba.md", (err, targetFName) => {
//         console.log(targetFName);
//       });
// }

// var fs = require("fs");
// pathMd = "prueba2.md"
// // Asynchronous read
// function readFileMd (pathMd) {
// fs.readFile(pathMd, function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + data.toString());
// })
// };

// Synchronous read
// var data = fs.readFileSync(pathMd);
// console.log("Synchronous read: " + data.toString());

// console.log("Program Ended");
