// This keyword tells about the current context
// Context tells you what it is about(movie context), current values

const user = {
    username: "daksh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) // Here it is a node env that is the reason the value is {} - empty object but in the case of browser the value is window object(used for window events)

// function chai() {
//     const username = "daksh"
//     // console.log(this) // too many things are returned
//     console.log(this.username); // undefined because this is not usable in the case functions but works for objects
// }

// chai()

// const chai = function() {
//     const username = "daksh"
//     console.log(this.username)
// }

// chai()

// const chai = () => {
//     const username = "daksh"
//     console.log(this) // empty object not too many values
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return (you need to use return)
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return (no need to return keyword because no curly braces)

// const addTwo = (num1, num2) => (num1 + num2) // implicit return (no need to return keyword because no curly braces)

const addTwo = (num1, num2) => ({username: "daksh"}) // the parenthesis help us return objects which is not possible in normal arrow function

console.log(addTwo(5,8));


// const myArray = [2, 4, 5, 9]

// myArray.forEach()