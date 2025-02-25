const findLargest = (num1, num2, num3) => {
    const numbers = [num1, num2, num3]
    numbers.sort((a, b) => a - b)
    return numbers[numbers.length - 1]
}

const largestNumber = findLargest(1, 22, 3)
console.log(`LargestNumber: ${largestNumber}`)