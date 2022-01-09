const regex = /[\d]{3,4}/g;
const str = '225-0002';
const array = str.match(regex);
if (array !== null) {
  console.log(array);
}
