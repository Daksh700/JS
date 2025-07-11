const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    }, // memory se leke aao aur uppercase kardo raste mei and ye get email ek method nhi property hei hai toh user ke liye property ke naam se matlb hai ab _ karke store kiya hai usse user ko matlb nhi

    set email(value) {
        this._email = value;
    }
}

const tea = Object.create(User) // factory function


console.log(tea.email); 
console.log(tea._email); // aise private access ho sakta hai kyuki property hei hai object ka isliye # karke proposal aya hai taki access nhi kar paye

// _ matlb private property hai toh normal users ke liye nhi hai
