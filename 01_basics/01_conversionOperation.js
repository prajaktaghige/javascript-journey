let score="33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(valueInNumber);

console.log(typeof valueInNumber);

/*"33"=> 33
"33abc" =>NaN
true=>1; false =>0
null=>0; undefined=>undefined
*/

let isLoggedIn = 1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//output will be true

/*
1=> true
0=>false
""=>false
"name"=>true
*/

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));
