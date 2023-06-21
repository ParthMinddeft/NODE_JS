const path = require('node:path');

const data1 = path.basename('/foo/bar/baz/asdf/quux.html');
const data2 = path.dirname('/foo/bar/baz/asdf/quux.html');
const data3 = path.extname(__filename);
console.log(data1);
console.log(data2);
console.log(__filename,data3);