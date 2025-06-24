const accountId = 15543
let accountEmail = "daksh12345@gmail.com"
var accountPassword = "1234567"
accountCity = "Mumbai"
let accountState

// accountId = 2 // not allowed

accountEmail = "da2344@gmail.com"
accountPassword = "4567"
accountCity = "Jaipur"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
