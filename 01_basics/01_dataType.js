"use strict";//treat all JS code as newer version

//alert(3 + 3)//we are using node.js not browser

//code readibilty should be high

let name = "hv"
let age = 18
let isLoggedIn = false
let state; //undefined data type


//approx range of number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
// null =>standalone value
// undefined => means abhi vlaue nhi assign hui h
//symbol => use for uniqueness

// object

console.log(typeof "hitesh")
console.log(typeof null) //it is an object in js(means type is object)
console.log(typeof undefined)//type is undefined

/* Primitive(call by value)


7 types; string ,Nmuber ,Boolean ,Null ,Undefined , Symbol,BigInt

*/


 
//javascript is a dynamically typed language
 const score = 100
 const scoreValue = 100.3
 const isLogged = false

 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId)
 const bigNumber = 346543576654356754n //now this will store in BigInt

 /*
Reference (non primitve )

// Array,Objects,Function(data type of all are function for function is is called function object )

*/
 const heros = ["shaktiman", "ironman", "naagraj"]
let myObj={
    name:"hv",
    age:18,
}

const myFunction = function(){

}

