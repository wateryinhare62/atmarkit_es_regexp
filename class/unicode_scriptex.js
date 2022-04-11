const str1 = 'さら〱、さら〱と葉ずれの音がして、';
const regexp1 = /\p{Script_Extensions=Hiragana}+/ug;
console.log(str1.match(regexp1));
const str2 = 'Signalize!/カレンダーガール';
const regexp2 = /\p{scx=Katakana}+/ug;
console.log(str2.match(regexp2));
