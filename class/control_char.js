const regexp = /[\t\f\n]/g;
const str = '1\t山内直\f1980\n男';
console.log(str.split(regexp));
