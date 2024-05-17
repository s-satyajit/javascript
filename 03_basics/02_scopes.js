let a = 10
const b = 20
// var c = 30

if (true) {
    let a = 100
    const b = 200
    var c = 300
    function addnum() {

    }
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "satyajit"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()

}

one()

if(true) {
    const username = "satyajit"
    if(username === "satyajit") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++




function addOne(num) {
    return num + 1
}
console.log(addOne(5))


const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(10))
