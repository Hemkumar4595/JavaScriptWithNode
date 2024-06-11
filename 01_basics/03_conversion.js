/** conversion into number */
/** Number(value?any) */

let conversionNum=true
let convertedNumber=Number(conversionNum)

// console.log(convertedNumber);
// console.log(typeof(convertedNumber)); //number

// null and empty string=> will be zero(0)
// string => NaN mean not a number, 
// undefined=> NaN
// false=>0 and True=> 1



/** conversion into boolean */
/** boolean(value?any) */
let boolValue=undefined
let conboolVal=Boolean(boolValue)
//console.log(conboolVal);
//console.log(typeof(conboolVal)); //boolean

// 1=> true,  1aas=> true, "Hemant"=> true
// 0=> false, ""=> false,   null=>false,    undefined=>false 


/** String conversion */
let strValue=false
let constrVal=String(strValue)
console.log(constrVal);
console.log(typeof(constrVal)); //String
