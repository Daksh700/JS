class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    // jitni bhi properties hoti hai unke getters aur setters methods automatically ban jate hai
    get password() {
        return `${this._password}daksh`;
    }
    set password(value) {
        this._password = value;
    } // ._ likha taki overwrite kar paye password ko bina uske get ya set nhi hoga kyuki do do jagah get aur set karne jaoge like constructor mei aur getter aur setter se toh stack overflow hojayega

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }
}

const daksh = new User("daksh@daksh.ai", "abc")

console.log(daksh.password); // get karne ke liye get and value set karne ke liye set

// set toh joh pass kiya hai wohi hoga but get kiya toh hum uppercase wala provide karenge

// ye sab tab use hota hai jab access nhi karne dena ho kisiko kuch and access karne dena ho but change karke mile value not the actual value

console.log(daksh.email);
