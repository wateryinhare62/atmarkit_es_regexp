const regexp = /(\d+\/)?(\d+)\/(\d+)/;
const str1 = '今日2/3は節分です。';
console.log(str1.replace(regexp, '$&'));
console.log(str1.replace(regexp, '$`'));
console.log(str1.replace(regexp, "$'"));
