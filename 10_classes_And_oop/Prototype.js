let myName = "daksh     "

// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spiderman power is ${this.spiderman}`);
        
    }
}

Object.prototype.daksh = function () {
    console.log(`daksh is present in all objects`);
    
} // direct object mei hei method dal diya toh ab sab access kar sakte hai ye method ko like arrays, strings, objects etc

Array.prototype.heydaksh = function () {
    console.log(`Daksh says hello`);
} // yaha sirf array ko power(method) diya hai 

// heroPower.daksh()
// myHeros.daksh()
// myHeros.heydaksh()
// heroPower.heydaksh() 

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // prototypal inheritance


// modern syntax for prototypal inheritance
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "chaiAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`); // chaiAurCode
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"daksh".trueLength()
"iceTea".trueLength()