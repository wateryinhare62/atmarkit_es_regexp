const regex1 = /[\da-fA-F]/g;
const str1 = '12ab';
console.log(str1.match(regex1));
const str2 = '0x12ab';
console.log(str2.match(regex1));
const regex2 = /[^\da-fA-F]/g;
console.log(str2.match(regex2));
