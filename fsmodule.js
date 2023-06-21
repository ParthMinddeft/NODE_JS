const fs = require('node:fs');

// fs.readFile('file.txt','utf8',(err,data) => {
//      console.log(err,data)
// });

// const a = fs.readFileSync('file.txt');
// console.log(a.toString());

// fs.writeFile('file2.txt','This is file second',() => {
//     console.log('written to the file');
// });

x = fs.writeFileSync('file2.txt','This is file second',() => {
    console.log(x);
    console.log('written to the file');
});
console.log("finished reading file");