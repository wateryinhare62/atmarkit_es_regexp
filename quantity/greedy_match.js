const regexp = /【(.+)】/g;
const str = '山内直【著】山田祥寛【監修】';
console.log(str.replaceAll(regexp, '《$1》'));
