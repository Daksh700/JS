// const tinderUser = new Object() // singleton object

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Daksh",
            lastName: "Goyal"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj4 = {
    5: "a",
    6: "b"
}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} is good practice and considered as target and other are source

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "daksh12@gmail.com"
    },
    {
        id: 2,
        email: "12daksh@gmail.com"
    },
    {
        id: 3,
        email: "daksh@gmail.com"
    },
]

// console.log(users[0].email);

// console.log(tinderUser);

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "js in hindi",
    coursePrice: "1999",
    courseTeacher: "Hitesh"
}

// course.courseTeacher

// object destructuring 
const {courseTeacher: Teacher} = course 

console.log(Teacher);

// {
//     "name": "Hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
