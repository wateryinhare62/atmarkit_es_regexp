let regexp = /<(([a-z]+)\s*([^>]*))>/;
const str1 = '<div id="top">';
const result = str1.match(regexp);
console.log(`Complete tag: ${result[0]}`);
console.log(`Tag cotent: ${result[1]}`);
console.log(`Tag name: ${result[2]}`);
console.log(`Attribute: ${result[3]}`);
