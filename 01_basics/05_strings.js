const name = "satyajit"
const repoCount = 50

//  console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('s-satyajit')
console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log((gameName.length));
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(2,6)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   satyajit   "  
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://satyajit.com/satyajit%20samal"
console.log(url.replace('%20', '-'));
console.log(url.includes('satyajit'));

console.log(gameName.split('-'));
