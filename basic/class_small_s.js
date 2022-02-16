const regex = /\s\d\s/g;
const str1 = '（ 1 ）回答を述べよ。';
console.log(str1.match(regex));
const str2 = '（2）これが正解。';
console.log(str2.match(regex));
