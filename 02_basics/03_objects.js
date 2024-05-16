// singleton
//Object.create

// object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Satyajit",
    [mySym]: "myKey1",
    age: 22,
    location: "Bhubaneswar",
    email: "satyajit@gmail.com",
    isLoggedIn: false
}

console.log(JsUser["name"])
console.log(JsUser[mySym])
console.log(JsUser["age"])
console.log(JsUser["isLoggedIn"])


