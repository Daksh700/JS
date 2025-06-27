const marvel = ["Iron Man", "Captain America", "Thor"]
const dc = ["Superman", "Batman", "Flash"]

// marvel.push(dc);

// console.log(marvel);
// console.log(marvel[3][0]);

// const allHeros = marvel.concat(dc)

// console.log(allHeros);

// const allnHeros = [...marvel, ...dc]

// console.log(allnHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const riyalArr = anotherArr.flat(Infinity)

console.log(riyalArr);

console.log(Array.isArray("Daksh"));
console.log(Array.from("Daksh"));
console.log(Array.from({name: "Daksh"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





