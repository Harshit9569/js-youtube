const accountId = 14453
let accountEmail = "hars@gooogle.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //semicolon is optional
/*
in js if we declare only a variable without any value then we try to print it then js will print it as undefined(as js consider it as undefined)
*/

// accountId = 2 //not allowed
accountEmail = "ghvd@google.com"
accounodntPassword = "212313"
accountCity = "Bengaluru"
console.log(accountId)
/*
prefer not to use 'var' because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])

