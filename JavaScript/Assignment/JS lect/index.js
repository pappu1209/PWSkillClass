// const path = require("path");

// console.log(path.sep);
// console.log(process.env.PATH);

// console.log(path.delimiter);

const filePath1 = '/public_html/home/index.html';

const currentFilePath = __filename;
console.log(currentFilePath);

let result = path.basename(currentFilePath);
console.log(result);