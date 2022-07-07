let regexp = /(次元|時言|自現)(?=爆弾)/g;
let str = "仕掛けられていたのは精巧な次元爆弾だった。";
console.log(str.replaceAll(regexp, "<em>$1</em>"));
regexp = /ー(?=\P{scx=Katakana})/ug;
str = "プログラミング言語には、インタープリター型とコンパイラー型がある。";
console.log(str.replaceAll(regexp, ""));
