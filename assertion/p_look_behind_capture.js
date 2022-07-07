const regexp = /\d+(?=(\$|£|€))/g;
let str = "主な通貨には、円以外に100$、200£、300€など少なくとも3種類以上あります。";
let result = str.matchAll(regexp);
for(element of result) {
    console.log(`${element[0]} は ${element[1]}`);
}
