const regexp = /<\/?[a-z]+>/ig;
const str = '<strong>タイトル</STRONG>';
console.log(str.match(regexp));
