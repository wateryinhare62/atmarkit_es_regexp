const str = 'Date: 2022-05-20';
const regexp = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)/d;
const result = str.match(regexp);
console.table(result.indices.groups);
