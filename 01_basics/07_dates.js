let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 2, 29)
// let myCreatedDate = new Date(2023, 2, 29, 5, 3)
// let myCreatedDate = new Date("2023-01-27")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // convert to seconds


let myNewDate = new Date()

console.log(myNewDate.getMonth() + 1);

console.log(myNewDate.getDay());

myNewDate.toLocaleString('default', {
    weekday: "long",
}) // provides control over date and time







