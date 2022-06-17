const regexp = /^[\w\-]{8,16}$/;
const list = [
    '1234', 
    'password',
    'long-password',
    'long-long-password'
];
list.forEach((elem, index) => {
    console.log(`Password ${index}:${elem}:${regexp.test(elem)}`);
});