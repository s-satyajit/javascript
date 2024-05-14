// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 23);
let myAnotherDate = new Date(2024, 4, 14, 8, 30);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myAnotherDate.toLocaleString());

let anotherDate = new Date("2024-05-14");
// console.log(anotherDate.toLocaleString());

let anotherFormat = new Date("05-14-2023");
// console.log(anotherFormat.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`${newDate.getMonth()} and the day is ${newDate.getDay()}`);
