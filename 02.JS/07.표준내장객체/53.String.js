// String 객체의 속성
console.log('안녕하세요'.length);       // 5

// String 객체의 Method
s = '안녕! JavaScript';
console.log(s.charAt(4));       // J
console.log(s.charCodeAt(0));

let d = s.concat(', 반가워');   // concatenate
console.log(d);                 // 안녕! JavaScript, 반가워

console.log(s.indexOf('Java'));
String.prototype.find = function(searchString) {
    return s.indexOf(searchString) >= 0;
}
console.log(s.find('Java'));
console.log(s.find('반가워'));

let t = s.replace('안녕', 'hello');
console.log(t);
t = s.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, '.');      // 한글이 아닌 문자를 '.'으로 대체
console.log(t);

console.log(s.slice(4), s.slice(4, 8));

console.log(s.split(' '));
console.log(['apple','banana','cherry'].join(', '));

t = s.substr(4, 4);
console.log(t);
console.log(s.substring(4, 8), s);

console.log(s.toLowerCase(), s);
console.log(s.toUpperCase(), s);
