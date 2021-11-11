console.log(__filename);
console.log(__dirname);

let relativeFilename = 'data/sample.txt';       // './data/sample.txt'
let absoluteFilename = __dirname + '/data/sample.txt';
console.log(relativeFilename);
console.log(absoluteFilename);