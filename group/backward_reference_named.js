const regexp = /(?<quote>["']).*\k<quote>/;
const str1 = '"Hello, world!!"';
console.log(str1.match(regexp));
const str2 = "'Hello, world!!'";
console.log(str2.match(regexp));
const str3 = '"Hello, world!!\'';
console.log(str3.match(regexp));
