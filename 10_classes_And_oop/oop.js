const user = {
    username: "daksh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`) // this used for current context 
        console.log(this);
    }
}

// console.log(user.getUserDetails())

// new keyword allows to create multiple instances and new context using a single object and it is known as constructor function

function User(username, loginCount, isLoggedIn) {
    this.username = username; // this is an object thats the reason we are able to add things
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this; // return the this object
}

const userOne = new User("daksh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false); // values will get overwritten and in order to avoid it we use new keyword
console.log(userOne.constructor); // [Function: User] it gives its own reference
// console.log(userTwo);


// empty object is created after using new keyword just like when we use this 



// 4 steps

// 1. after writing this keyword new object will be created
// 2. constructor function gets called because of the new keyword and it packs all the arguments and gives it you.
// this.username = username; 
// this.loginCount = loginCount;
// this.isLoggedIn = isLoggedIn;
// 3. At the end you get them in the function


