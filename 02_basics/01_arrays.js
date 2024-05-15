
const myArr = [1, 2, 3, 5, 6];
const myHeros = new Array("Shaktiman", "naagraj");

console.log(myArr.indexOf(2));
console.log(myHeros[1]);

myArr.push(4);
console.log(myArr);                        //adds the element in the last

myArr.shift();
console.log(myArr);                        //removes the frist element

myArr.unshift(9, "satyajit");               //adds the elements in the first
console.log(myArr);

myArr.pop();                                //removes the last element
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(10));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

const myAr1 = myArr.slice(1, 4);
console.log(myAr1);

const myArr2 = myArr.splice(2, 6);
console.log(myArr2);
console.log(myArr);