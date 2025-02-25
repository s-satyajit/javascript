const findLargest = (num1, num2, num3) => {
    return num1 >= num2 && num3 ? num1 : num2 >= num1 && num3 ? num2 : num3
}

const largestNumber = findLargest(2, 33, 4)
console.log(`LargestNumber: ${largestNumber}`)