// Arrays make shallow copy when copied (Basically reference of actual address)

const myArr = [0, 1, 2, 3, 4]

const myHeros = ["Iron Man", "Captain America"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);

// myArr.push(5);
// myArr.push(6);
// myArr.pop();

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(1));
// console.log(myArr.indexOf(1));

const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // It does not manipulate the og array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // splice manipulates the og array

console.log(myn2);
console.log("C ", myArr);









