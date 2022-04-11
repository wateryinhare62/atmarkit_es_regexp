const str = 'Hello, World!!';
const regexp1 = /\p{General_Category=Lowercase_Letter}+/ug;
console.log(str.match(regexp1));
const regexp2 = /\p{General_Category=Lu}+/ug;
console.log(str.match(regexp2));
const regexp3 = /\p{gc=Lo}+/ug;
console.log(str.match(regexp3));
