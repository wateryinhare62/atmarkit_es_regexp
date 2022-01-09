const regex = /[\d]{4}/;
const str = '225-0002';
const array = regex.exec(str);
if (array !== null) {
  console.log(`${array[0]} が見つかりました。`);
}
