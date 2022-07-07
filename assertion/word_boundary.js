const regexp = /\b\d+\b/g;
let str = "11,12,13";
console.log(str.match(regexp));
str = "11th, 12th, 13th anniversary.";
console.log(str.match(regexp));
