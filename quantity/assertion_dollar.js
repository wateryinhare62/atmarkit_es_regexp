const regexp = /[\.．｡]$/;
const list = [
    'よろしくお願いします。',
    '理系の文章はカンマピリオドを使うことが多いです.',
    '全角と半角を混ぜてしまうこともありますね｡'
];
list.forEach((str, index) => {
    console.log(`${index}:${str.replace(regexp, '。')}`);
});