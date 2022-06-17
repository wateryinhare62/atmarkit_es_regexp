const regexp1 = /\d{2}:?/g;
const regexp2 = /\d{2}:?/gy;
const str = '16:14::34';
let obj = null;
while((obj = regexp1.exec(str)) != null) {
    console.log(`global:${obj}`);
}
while((obj = regexp2.exec(str)) != null) {
    console.log(`sticky:${obj}`);
}
