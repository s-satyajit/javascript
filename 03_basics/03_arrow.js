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

chai()