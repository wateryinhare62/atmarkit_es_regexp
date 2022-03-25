const regexp = /(\d+)\/(\d+)\/(\d+)/;
const str1 = '2022/2/3は節分です。';
let result = str1.match(regexp);
console.log(`Matched date: ${result[0]}`);
console.log(`Matched year: ${result[1]}`);
console.log(`Matched month: ${result[2]}`);
console.log(`Matched day: ${result[3]}`);
