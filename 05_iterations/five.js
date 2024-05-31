const coding = ['javaScript', 'java', 'python', 'ruby', 'cpp']

coding.forEach( function (item) {
    // console.log(item)
})

coding.forEach( (item) => {
    // console.log(item)
})

function printMe(item) {
    // console.log(item)
}

coding.forEach(printMe)         //here we are giving reference of the function printMe, not executing that

coding.forEach( (item, ind, ar) => {
    console.log(item, ind, ar)
} )

const myCoding = [
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'javaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})