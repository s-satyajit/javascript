const user = {
    username: "Satyajit",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this)
    }
}

user.welcomeMessage()
user.username = "Sam"
user.price = 899
user.welcomeMessage()

// console.log(this)

function chai() {
    let username = "satyajit"
    // console.log(this.username)           //this can't be used in functions, but can be used in objects
}

// chai()
 
// const coffee = function() {
//     let username = "satyajit"
//     console.log(this.username);
// }

const coffee = () => {
    let username = "Satyajit"
    // console.log(this.username)
    // console.log(this)
}

coffee()


// const addTwo = (num1, num2) => {
//     return num1 + num2                  //explicit return
// }

// const addTwo = (num1, num2) => (num1 + num2)        //implicit return

const addTwo = (num1, num2) => ({username: "Satyajit"})

console.log(addTwo(3,4))

const myArray = [2, 4, 5, 6]

// myArray.forEach(function() {})
// myArray.forEach(() => ())
// myArray.forEach(() => { })