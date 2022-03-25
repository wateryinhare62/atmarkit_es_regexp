const regexp = /(\d+)-(\d+)-(\d+)/g;
const str = '2022-2-3は節分です。2022-2-4は立春です。';
console.log(str.replace(regexp, '$1/$2/$3'));
console.log(str.replaceAll(regexp, '$1/$2/$3'));
