let age = "33"

console.log( typeof age)
console.log(typeof(age))

let valueInNumber = Number(age)
console.log(typeof valueInNmuber);
console.log(valueInNumber);
//note conversion of null  to number will give  answer 0;
//is suppose age="33ab" and we are converting it into number then output will be nan and type is number

//"33" =>33
//"33ab" =>>NaN
//true =>1; FALSE =>0

let isLoggedIn = 1
let booleanIsLogged = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 =>true; 0=>false
//"" =>false
// "hitesh" => true

let someNumber = 33
let stringNmuber = String(someNmuber)
 //33 =>"33" type string

 //******operations ****/
  let value = 3;
  let negValue = -value //-3
  //console.log(negValue)

  console.log(2+2)
  console.log(2-2)
  console.log(2*2)
  console.log(2**2)
  console.log(2/2)
  console.log(2%2)

  let str1 = "hello"
  let str2 = "_hitesh"
  let str3 = str1 + str2
  console.log(str3)//hello_hitesh

  console.log("1" + 2) //12
  console.log(1 + "2") //12
  console.log("1" + 2 + 2) //122
  console.log(1 + 2 + "2") //32

  console.log(true)//true
  console.log(+true) // 1
//console.log(true+) // error
  console.log(+"");

  let num1,num2,num3
  num1 = num2 = num3 = 2 + 2

  let gameCounter = 100
  gameCounter++
  console.log(gameCounter) // 101

  let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


