const regexp = /\((\d+)\)/;
const str1 = '(1)半角だけの括弧数字です。';
const str2 = '(2)半角だけの括弧数字です。';
console.log(str1.replace(regexp, '（$1）'));
console.log(str2.replace(regexp, '（$1）'));
