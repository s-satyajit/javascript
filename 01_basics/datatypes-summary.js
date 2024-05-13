// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue  = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;;;;;;;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3453645697456743745345n;

// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "satyajit",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof bigNumber)
console.log(typeof myFunction)





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "satyajit"

let anotherName = myName
anotherName = "satyajitsamal"

// console.log(myName)
// console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "satyajit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);