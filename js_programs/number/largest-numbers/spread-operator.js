const findLargest = (num1, num2, num3) => {
  return Math.max(...[num1, num2, num3]);
};

const largestNumber = findLargest(1, 33, 4);
console.log(`Largest Number ${largestNumber}`);
