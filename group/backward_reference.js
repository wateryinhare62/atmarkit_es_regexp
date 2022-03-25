const regexp = /<(h[1-6])>.*<\/\1>/;
const str1 = '<h1>Heading 1</h1>';
console.log(str1.match(regexp));
const str2 = '<h2>Heading 2</h2>';
console.log(str2.match(regexp));
const str3 = '<h3>Heading 3</h4>';
console.log(str3.match(regexp));
