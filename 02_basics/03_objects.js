//singleton

const mySym = Symbol("key1")

//object literals
const JsUser = {
    name: "Daksh",
    "full name": "Daksh Goyal",
    [mySym]: "mykey1", // mySym: "mykey1" if no array brackets are used around mySym then it wont be considered as a Symbol data type. So use array bracket around your key.
    age: 19,
    location: "Mumbai",
    email: "daksh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.age);
// console.log(JsUser["age"]); // second way of accessing object value
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "1234Daksh@google.com"

// Object.freeze(JsUser) // now you cannot change object

JsUser.email = "1234Daksh@microsoft.com"

// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User ${this.name}`);
}

// console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

   

