const regexp = /ー(?!\p{scx=Katakana})/ug;
let str = "コンピューターの使い方を教えるインストラクターが増えてきた。";
console.log(str.replaceAll(regexp, ""));