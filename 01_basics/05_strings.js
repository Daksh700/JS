const name = "daksh"
const repoCount = 5

// console.log(name + repoCount + " Value") NOOOOOO

console.log(`Hello My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('daksh-m-g')

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,2)

// console.log(newString);

const anotherString = gameName.slice(-2, 4) // -2 = s because -1 is h and 4 is also h but it doesn't include the last character

// console.log(anotherString);

const anotherOne = "    daksh     "

console.log(anotherOne);

console.log(anotherOne.trim());

const url = "https://daksh.com/daksh%20goyal"

console.log(url.replace('%20', '-'));

console.log(url.includes('daksh'));

console.log(gameName.split('-'));










