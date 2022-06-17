const regexp = /^\d{3}-\d{4}$/;
const list = [
    '100-002', 
    '225-0002',
    '969-22635',
    '273-0128',
    '23-0008'
];
list.forEach((elem, index) => {
    console.log(`${index}:${elem}:${regexp.test(elem)}`);
});