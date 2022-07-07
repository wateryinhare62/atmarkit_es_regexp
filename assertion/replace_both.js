const regexp = /^|$/g;
const lines = ['1,000', '2,000', '3,000'];
lines.forEach(line => {
    console.log(line.replace(regexp, '*'));
});
