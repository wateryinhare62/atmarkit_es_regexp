const regex = /\.txt/;
const str1 = 'filename.txt';
console.log(str1.match(regex));
const str2 = 'filename*txt';
console.log(str2.match(regex));
