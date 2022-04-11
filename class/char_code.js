const regexp1 = /[\x2c\cI]/g;
const str1 = '1,山内直,1980,男';
const str2 = '1\t山内直\t1980\t男';
console.log(str1.split(regexp1));
console.log(str2.split(regexp1));
const regexp2 = /[\u002c\t]/g;
console.log(str1.split(regexp2));
console.log(str2.split(regexp2));
