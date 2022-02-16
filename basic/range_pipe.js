const regexp = /http:|https:|ftp:/;
const str1 = 'http://www.example.com';
console.log(str1.match(regexp));
const str2 = 'https://sp.example.com';
console.log(str2.match(regexp));
const str3 = 'mailto:someone@example.com';
console.log(str3.match(regexp));
