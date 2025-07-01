// while

let i = 0
while (i <= 10) {
    console.log(i);
    i = i + 2;
}


let myArray = ["flash", "batman", "superman"]

let index = 0
while (index < myArray.length) {
    console.log(myArray[index]);
    index++;
}

let score = 1

do {
    console.log(`Score is: ${score}`);
    score++;
} while (score <= 10);