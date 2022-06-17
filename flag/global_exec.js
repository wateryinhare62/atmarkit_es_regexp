const regexp1 = /【.+?】[^【]+/;
const regexp2 = /【.+?】[^【]+/g;
const str = '【著】山内直【監修】山田祥寛【翻訳】小野寺志乃';
console.log(regexp1.exec(str));
let obj = null;
while((obj = regexp2.exec(str)) != null) {
    console.log(obj);
}
