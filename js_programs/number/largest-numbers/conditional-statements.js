const findLargest = (num1, num2, num3) => {
    if(num1 >= num2 && num1 >= num3)
        return num1;
    else if(num2 >= num1 && num2 >= num3)
        return num2
    return num2
}
const largestNumber = findLargest(2, 33, 4)
console.log(`Largest Number: ${largestNumber}`)