function multipleby5(num) {
    return num * 5;
}
multipleby5.power = 2;

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype); // prototype also has it properties and also makes available this context and if we would have written something like this.num = num inside the above function then it will store that but the yes it will return empty

// Function is a function and also object

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
   this.score++; // this = jis ne bhi bulaya uska score bada do
}

createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

// javascript handles the prototype so we do not need write .prototype again and again to access any methods/functions.

chai.printMe() // this will print error because we need to tell the - const chai = createUser("chai", 25) that we have some other properties like new properties ayi hai.so we use new keyword for it to tell about the new properties.

chai.increment();
chai.printMe();
 

// Behind the scenes of new keyword

// 1. new object create hota hai and woh new object ka ek reference hona chaiye toh humne is case mei - const chai = new createUser("chai", 25) iske case mei humne ye function ko as a reference diya hai - function createUser(username, score) {
//     this.username = username;
//     this.score = score;
// }
// 2. Object banaya toh woh constructor function ke prototype property se link hoga hei hoga.
// 3. without new keyword ke ye - createUser.prototype.printMe = function () {     hawa mei tha but new keyword ke baad toh usko samjha ki haan mujhe inject karna hai toh usne ek object liya aur us object ke andar prototype inject kiya and phir humne joh method define kiye usko bhi inject kiya and phir samjha ki haan iske - function createUser(username, score) {
//     this.username = username;
//     this.score = score;
// }  basis par banana hai
// 4. Then phir constructor funtion call hoga uske specified arguments ke sath and woh newly created object ke sath bound hoga hei.If koi return value specified nhi kiya hai constructor mei toh javascript assume karta hai ki newly created object hei intended return value hai.
// 5. finally new object then wapis de diya jata hai

