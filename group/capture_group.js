const regexp = /([\w-]+\.)+[\w-]+/;
const str1 = 'atmarkit.itmedia.co.jp';
console.log(str1.match(regexp));
const str2 = 'atmarkit-itmedia-co-jp';
console.log(str2.match(regexp));
