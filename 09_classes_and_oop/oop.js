// const user = {
//     username: "Satyajit",
//     loginCount: 8, 
//     signedIn: true,

//     getUserDetails: function() {
//         console.log("Got user details from database")
//         return `Username: ${this.username}`
//     }
// }

// console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = new User("Satyajit", 9, true)
const userTwo = new User("Satyajit Samal", 10, true)

// console.log(userOne)
console.log(userTwo)