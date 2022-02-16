const regex = /https?:/;
const str1 = 'https://naosan.jp/';
console.log(str1.match(regex));
const str2 = 'http://naosan.jp';
console.log(str2.match(regex));
