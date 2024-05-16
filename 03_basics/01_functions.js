function sayMyName() {
    console.log("S")
    console.log("A")
    console.log("T")
    console.log("Y")
    console.log("A")
    console.log("J")
    console.log("I")
    console.log("T")
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {
    // const result = number1 + number2
    // return result;

    // console.log("Satyajit")
    return number1 + number2
    // console.log("Satyajit")            //After the return statement, nothing works 
}

const result = addTwoNumbers(3, 4)
// console.log("Result: " + result)

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// // loginUserMessage("Satyajit")
// console.log(loginUserMessage("Satyajit"))

// function loginUserMessage(username) {
//     if(!username) {
//         console.log("Please enter your username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Satyajit"))


function loginUserMessage(username = "sam") {   //a default value is given to the username, only if there isn't any argument given against it
    if(!username) {                     // this won't work out as there is always username provided 
        console.log("Please enter your username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
