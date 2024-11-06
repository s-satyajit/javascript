const cart = ["shoes", "pants", "kurta"]

createOrder(cart, function(orderId) {
    proceedToPayment(orderId)
});

// function sum(a, b) {
//     console.log(a + b)
// }

const sum = (a, b) => {
    // console.log(a + b)
}

function calculator(a, b, sumCallback) {
    sumCallback(a,  b)
}

calculator(1, 2, sum)

// calculator(1, 3, (a, b) => {
//     console.log(a + b)
// })

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log(dataId)
//         if(getNextData)
//             getNextData()
//     }, 2000)
// }

// //callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         })
//     })
// })


