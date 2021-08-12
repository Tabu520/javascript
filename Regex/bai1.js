var phone = "088-3434-3333";
var phone2 = "070-1234-1234";
var phone3 = "090-1241-34634";
var phone4 = "120-2355-1244";

// var result = phone.replace(/-/g, '');
// console.log(result);

// const phoneNumberRegex = /^0[0-9]{9}$/;
// const phoneNumberRegex2 = new RegExp('^0[0-9]{9}$');
// console.log(phoneNumberRegex.test(result));
// console.log(phoneNumberRegex2.test(result));

const phoneNumberRegex = /^0\d{2}-\d{4}-\d{4}$/;
console.log(phoneNumberRegex.test(phone4));

console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));