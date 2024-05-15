const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["batman", "flash", "superman"];

// marvelHeros.push(dcHeros);

const allHeros = marvelHeros.concat(dcHeros);               //concat operator
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros];           //spread operator
// console.log(allNewHeros);

const newArray = [1, 2, 4, 5, [2, 3, 5], 5, 6, 9, [4, 6, 9, [3, 5, 7]]];
const allNewArray = newArray.flat(Infinity);
// console.log(allNewArray);

// console.log(Array.isArray("Satyajit"))
// console.log(Array.from("Satyajit"))
// console.log(Array.from({name: "Satyajit"}))

let score1 = 100;
let score2 = 200; 
let score3 = 300;

console.log(Array.of(score1, score2, score3));
