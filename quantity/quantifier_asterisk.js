const regexp = /<(([a-z]+)(\s+([^>]*))*)>/;
const tags = [
    '<div id="top">',
    '<div id="top" class="normal">',
    '<div>'
];
tags.forEach((str, index) => {
    let result = str.match(regexp);
    console.log(`${index}:${str}`);
    console.log(`\tComplete tag: ${result[0]}`);
    console.log(`\tTag content: ${result[1]}`);
    console.log(`\tTag name: ${result[2]}`);
    console.log(`\tAttribute: ${result[3]}`);
});