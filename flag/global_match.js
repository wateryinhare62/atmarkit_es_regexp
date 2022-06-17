const regexp1 = /【.+?】[^【]+/;
const regexp2 = /【.+?】[^【]+/g;
const str = '【著】山内直【監修】山田祥寛【翻訳】小野寺志乃';
console.log(str.match(regexp1));
console.log(str.match(regexp2));
