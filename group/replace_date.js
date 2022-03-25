const regexp = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/;
const str1 = '2022-2-3は節分です。';
console.log(str1.replace(regexp, '$<year>/$<month>/$<day>'));
