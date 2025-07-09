const promiseOne = new Promise((resolve,reject) => {
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(() => {
        console.log("async task is complete")
        resolve()
    }, 1000)
});

promiseOne.then(() => {
    console.log("Promise consumed")
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(() => {
    console.log("async 2 resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
}) // promise creation

promiseThree.then((user) => {
    console.log(user)
}) // promise consumption

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "daksh", password: "123"});
        }
        else {
            reject('Error: Something went wrong');
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("The promise is either resolved or rejected")
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "javascript", password: "123"});
        }
        else {
            reject('Error: JS went wrong');
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/Daksh700').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})