const descripter = Object.getOwnPropertyDescriptor(Math, "PI") 

// Math key nhi hai .pi key hai aur uski value is the value

// console.log(Math.PI);

// console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("chai nhi bani");
    }
}



Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false // ab loop nhi chalega isse matlb ki name wala key value pair nhi ayega 
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of chai) {
//     console.log(`${key} : ${value}`);
// } // this wont work becuase chai wale obejct par direct loop nhi laga sakte hai aise hei

// for (let [key, value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);
// } // now you can loop because of this - Object.entries but ab agar function dal diya object mei toh pura function hei miljayega but hume toh key value pair chaiye so use condition

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}