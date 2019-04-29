const path = require('path');
const fs = require('fs');

function validatePath (pathMd) {
    const extension = path.extname(pathMd);
    if (extension == '.md') {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }

  function absolutePath (absolutelink) {
    const absolute = path.resolve(absolutelink);
    console.log(absolute);
    return absolute;
  }

  function readFileMd (pathMd) {
    return new Promise((resolve, reject) => {
      fs.readFile(pathMd, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
          findlinks(pathMd, data);  
        }
      });
    });
  };


  function findlinks (pathMd, data){
    console.log("findlinks");
    let find = data;
    console.log(find);
      let expresion = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n]+)/g;
      let linksfinder = find.match(expresion);
      console.log(`File name: ${pathMd}`);
      console.log('Total links: ' + ' ' + linksfinder.length);
       };
      

  module.exports = {
    validatePath,
    absolutePath,
    readFileMd,
    findlinks
  };




