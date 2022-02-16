const regex = /\d{3}-\d{4}/;
const str1 = '225-0002';
console.log(str1.match(regex));
const str2 = '2250002';
console.log(str2.match(regex));
const str3 = '225-02';
console.log(str3.match(regex));
