const regexp = /(?<year>\d+)\/(?<month>\d+)\/(?<day>\d+)/;
const str1 = '2022/2/3は節分です。';
let groups = str1.match(regexp).groups;
console.log(`Matched year: ${groups.year}`);
console.log(`Matched month: ${groups.month}`);
console.log(`Matched day: ${groups.day}`);
