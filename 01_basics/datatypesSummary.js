// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol('123')

const anotherId = Symbol('123')

console.log(anotherId);

const bigNumber = 579835798375959377559843n // bigInt

console.log(typeof(bigNumber));

// Reference (Non Primitive)

// Array, Objects, Functions -> typeof -> object, object, function object

const heros = ["Iron Man", "Captain America", "Black Widow", "Hulk", "Hawkeye", "Thor"];

let Obj = {
    name: "Daksh",
    age: 19,
}

const myFunction = function() {
    console.log("Hello World");
    
}

console.log(typeof(Obj));