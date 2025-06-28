function sayMyName() { // function definition
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName // refrence

// sayMyName() // reference and execution

// function addTwoNumbers(number1, number2)  {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2)  {
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "Sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))

// console.log(loginUserMessage("daksh")); // undefined

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// ...num1 used as paramter is known as rest operator in this scenario because if someone passes more arguments then expected then we combine them into one array using rest operator

const user = {
    username: "daksh",
    price: 99
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Hitesh",
    price: 299
})

const myNewArray = [200, 500, 300, 700]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 500, 300, 700]));
