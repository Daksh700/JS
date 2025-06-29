// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a);

}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "daksh"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()

}

// one()

if(true) {
    const username = "daksh"
    if(username === "daksh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// mini-hoisting

console.log(addone(5)); // This can be accessed

function addone(num1) {
    return num1 + 1
}

console.log(addTwo(5)); // This is not accessible because we have declared the function in a different way by using a variable to store the function

const addTwo = function(num) {
    return num + 2
}
