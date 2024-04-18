const accountId = 14434
let accountEmail = "arjuntaliyan86@gmail.com"
var accountPassword = "12345"
accountCity = "Meerut"

// accountId = 22 // not allowed

accountEmail = "arjun@gmail.com"
accountPassword = "424242"
accountCity = "Chhur"

let accountState;

console.log(accountId);

/*
Perfer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState] )