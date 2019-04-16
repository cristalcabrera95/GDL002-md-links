const path= require("path");
const fs = require ("fs")

function validatePath(pathMd){
    const extension = path.extname(pathMd);
if (extension == ".md"){
    console.log("true");
    return true;
}
else{
    console.log("false");
    return false;
}
};

function absolutePath(absolutelink){
const absolute = path.resolve(absolutelink);
return absolute;
};


 function readFileMd(pathMd) {
     return new Promise((resolve, reject) => {
         fs.readFile(pathMd, "utf-8", (err, data) => {
             if (err) {
                 reject(err);
             } else {
                 resolve(data);
             }
         })
     })
 }


module.exports = {
    validatePath,
    absolutePath,
    readFileMd
    
}
