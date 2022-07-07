const regexp = /\b\d+\b/g;
let str = "11,1_2,1_3";
console.log(str.match(regexp));
str = "1_1th, 1_2th, 1_3th anniversary.";
console.log(str.match(regexp));
