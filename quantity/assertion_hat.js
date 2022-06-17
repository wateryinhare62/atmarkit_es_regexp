const regexp = /^\s+/;
const list = [
    '　こんにちは。',
    '        Good Morning!',
    '\t1,000,000円'
];
list.forEach((str, index) => {
    console.log(`${index}:${str.replace(regexp, '')}`);
});