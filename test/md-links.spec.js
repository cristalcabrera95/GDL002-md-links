const {validatePath, absolutePath, readFileMd  } = require("../src/mdLink.js")

test("should be a file markdown",()=>{
expect(validatePath("README.md")).toBe(true);
});

test ("should be a absolute path ",()=>{
  expect(absolutePath("README.md")).toBe("/home/laboratoria-180/Escritorio/GDL002-md-links/README.md");
});

test ("should read a file",()=>{
   readFileMd("prueba.md").then((result) => {
     expect(result).toBe("holis a todos");
   })
   })
