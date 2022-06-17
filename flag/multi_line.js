const regexp1 = /^@[\w]+$/g;
const regexp2 = /^@[\w]+$/mg;
const str = '@user_id\n@invalid';
console.log(str.match(regexp1));
console.log(str.match(regexp2));
