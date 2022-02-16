const regex = /（.*）/;
const str1 = 'これを正規表現（Regular Expression）という。';
console.log(str1.match(regex));
const str2 = 'これを正規表現〈Regular Expression〉という。';
console.log(str2.match(regex));
