function SetUserName(username) {
    // complex DB calls
    this.username = username;
    console.log("callled");
}

function createUser(username, email, password) {
    // SetUserName(username); // ye call ho toh raha hai par scene aisa hai ki call hone ke baad uska context stack mei se nikal jata hai toh uske niche wale function ko uska context mil hei nhi pata hai. is case mei call likhna padta hai taki woh reference ko hold karke rakh sake but call ko bhi khudka this(context) dena padta hai taki usko pata chale ki haan ye this mei hold karna hai taki woh khudka this use nhi kare aur pass kiya huva gaya this use kare
    SetUserName.call(this, username)
    this.email = email;
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123");

console.log(chai);

// reference hold - .call