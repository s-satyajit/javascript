// singleton
//Object.create

// object literals


const mySym = Symbol["key1"]

const JsUser = {
    name: "Satyajit Samal",
    [mySym]: "myKey1",
    age: 22,
    email: "samalsatyajit668@gmail.com",
    isLoggedin: false,
    lastLoggedIn: ["Monday", "Friday"]
}


//change value
JsUser.email = "satyajit.samal2024@gmail.com"

//freeze
// Object.freeze(JsUser);

console.log(JsUser["name"])
console.log(JsUser[mySym])
console.log(JsUser["lastLoggedIn"])
console.log(JsUser["email"])
console.log(JsUser)

JsUser.greet = function() {
    console.log("Hello JsUser")
}

JsUser.greetTwo = function() {
    console.log(`Hello JsUser, ${this.name}`)
}

JsUser.greet()
console.log(JsUser.greetTwo())