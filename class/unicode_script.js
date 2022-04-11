const str = 'こんにちはー、世界！';
const regexp1 = /\p{Script=Hiragana}+/ug;
console.log(str.match(regexp1));
const regexp2 = /\p{Script=Han}+/ug;
console.log(str.match(regexp2));
const regexp3 = /\p{Script=Greek}+/ug;
console.log(str.match(regexp3));
