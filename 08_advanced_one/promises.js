const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network

    console.log("Async Task")
    resolve()
})

promiseOne.then(function() {
    console.log("Async task completed")
}) 

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async task 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "satyajit", email: "samalsatyajit668@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username: "satyajit", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then(function(user) {
    console.log(user)
    return user.username
}).then(function(username) {
    console.log(username)
}).catch(function(error) {
    console.log(error)
}).finally(function() {
    console.log("The promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "JavaScript", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } 
    catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = response.json()
//         console.log(data)
//     } 
//     catch(error) {
//         console.log("E: ", error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))


