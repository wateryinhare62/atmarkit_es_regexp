const str = 'Hello, World!!';
const regexp1 = /[\p{White_Space}\p{Uppercase}]/ug;
console.log(str.match(regexp1));
const regexp2 = /\p{White_Space}/ug;
console.log(str.match(regexp2));
