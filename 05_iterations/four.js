const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for(const key in myObject) {
    // console.log(key)
}

for(const key in myObject) {
    console.log(`Shortcut for ${key} is ${myObject[key]}`)        //for in is used while iterating over objects
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']  

for(const key in programming) {
    console.log(key)                 //unlike for of, for in in array, gives the key instead of the exact value
}
for(const key in programming) {           
    console.log(programming[key]) 
} 