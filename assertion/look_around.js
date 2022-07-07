const regexp = /(?<=\d)(?=(\d{3})+(?!\d))/g;
let str = "今日の売上は12345678,790円、販売個数は9876個でした。";
console.log(str.replaceAll(regexp, ","));
