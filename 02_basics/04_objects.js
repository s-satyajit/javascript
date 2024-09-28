const tinder = new Object()

const tinderUser = {}

// console.log(tinder)

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "samalsatyajit668@gmail.com",
    fullname: {
        firstname: "Satyajit",
        lastname: "Samal"
    },
    age: 22
}

// console.log(regularUser)
// console.log(regularUser.fullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "ssamal@gmail.com"
    },
    {
        id: 3,
        email: "satyajit@gmail.com"
    }
]

// console.log(users[0].id)
// console.log(users[0].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("name"))
console.log(regularUser.hasOwnProperty("fullname"))

const course = {
    courseName: 'JavaScript',
    price: 999,
    courseInstructor: 'Hitesh'
}

// console.log(course.courseName)

// const {courseInstructor} = course
// console.log(courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor)


