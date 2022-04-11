const rocket = 0x1F680;
const str1 = String.fromCodePoint(rocket);
console.log(`\\u{${rocket.toString(16)}}は${str1}`);
const x = rocket - 0x10000;
const upper = Math.floor(x / 0x0400) + 0xD800;
const lower = (x % 0x0400) + 0xDC00;
const str2 = String.fromCodePoint(upper, lower);
console.log(`\\u${upper.toString(16)}\\u${lower.toString(16)}は${str2}`);
