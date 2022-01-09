const regex = /[\d]{3,4}/g;
const str = '225-0002';
const array = str.matchAll(regex);
for (const match of array) {
  console.log(match[0]);
}
