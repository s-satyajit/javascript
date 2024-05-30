// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [8, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World!"
for(const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', "United States of America")
map.set('Fr', 'France')

for(const key of map) {        //for of is used while iterating over map
    // console.log(key)
}

for(const [key, val] of map) {
    console.log(key, ':-', val)
}