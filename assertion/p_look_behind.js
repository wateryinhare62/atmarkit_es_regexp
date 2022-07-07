const regexp = /(?<=[\$£€])\d+/g;
let str = "主な通貨には、円以外に$1、£2、€3など少なくとも3種類以上あります。";
console.log(str.match(regexp));