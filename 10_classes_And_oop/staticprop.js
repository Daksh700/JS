class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username: ${this.username}`)
    }

    static createId() {
        return `123`
    } // static likhne se ab ye property ka access instances ko nhi milega 
}

const daksh = new User("daksh")
// console.log(daksh.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone,com")

console.log(iphone.createId());
