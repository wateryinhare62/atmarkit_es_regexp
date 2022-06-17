let regexp = /.+/g;
console.log(regexp.global);
regexp.global = false;
console.log(regexp.global);
