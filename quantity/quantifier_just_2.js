const regexp = /^(\d{3}-\d{4})$/;
const list = [
    '100-002', 
    '225-0002',
    '969-22635',
    '0001-8086',
    '273-0128'
];
list.forEach((elem, index) => {
    console.log(`${index}:${elem}:${regexp.test(elem)}`);
});