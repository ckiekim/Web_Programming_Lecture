const url = require('url');

let naverSearch = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=url';
console.log(url.parse(naverSearch));

let local = 'http://localhost:3000/?title=HTML';
let pathname = url.parse(local, true).pathname;
let query = url.parse(local, true).query;
console.log(pathname);
console.log(query);