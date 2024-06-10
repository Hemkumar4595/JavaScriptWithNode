const accountId=13334;
/* you can not change the value of const variable */

let accountEmail="hem@gmail.com";
/* scope problem resolve */

var accountPassword="12342";
accountCity="jaipur";
/* scope problem issue */

/** do'nt use var bcz the functional scope */

accountEmail="AS@gmail"
// console.log(accountId);
// console.log(accountEmail);

let accountState;

// if you declare the variable and not asign the value then default value will be undefined.

console.table([accountId,accountEmail,accountPassword,accountState])



