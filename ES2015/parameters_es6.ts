//********************************************************************************************************************************************** */
//Default parameters - Default parameters are the parameters with an initialised value.
//Invoking a function without passing any arguments, would assume default values and process the request.
//******************javascript way */
// function foo1(a, b) {
//     a = a || "Sayan";
//     b = b || "Halder";
//     console.log(a, b);
// }        
// foo1();           
// foo1("Hello", " World")  // 5 10

// //********************ES6 way */
// function foo2(a = "Sayan", b = "Halder") {
//     console.log(a, b);
// }
// foo2();            // 10 20
// foo2("Hello ", "World");  // 5 10

//Example from codeevolution
// let percentBonus = (basic) => 0.1*basic;
// var getValue = function(basic=10, bonus = basic*percentBonus(basic)){ console.log((basic + bonus) + " " + arguments); } //default params can also be functions and expressions
// getValue(20,20);

//********************************************************************************************************************************************** */
//REST parameters - Rest allows indefinite number of parameters in one single array. Notation ...<paramname> is used to define Rest Parameter.
//*******************Javascript way */
// function sum1() {
//     var args = Array.prototype.slice.call(arguments);  
//     // converts args to array
//     let result = 0;
//     console.log(typeof arguments);
//     console.log(typeof args);
//     args.forEach(function (item) { 
//                  result += item;
//      } );
//     return result;
// }
// console.log(sum1(1,2,3));
// //*********************ES6 way */
// //args is rest parameter
// function sum2(...args) {
//     var result = 0;
//     args.forEach(function(item) { result += item; } )
//     return result;
// }
// let [x,y,z] = [1, 2, 3];
// let add = sum2(x, y, z, a, b);
// console.log(add);  // output: 6

//Example from Codeevolution
//display multiple colors--- using normal JavaScript
let msg = "List of colors";
let displayColors = function(msg1) {
   console.log(msg1);
   console.log(arguments);
   for(let i in arguments){
      console.log(arguments[i]);
   }
}
displayColors(msg, "Red");
displayColors(msg, "Red", "Blue");
displayColors(msg, "Red", "Blue", "Green");
console.log("**************************************");

//Using ES6 way ------------------
let displayColors1 = function(msg1, ...colors) {
   console.log(msg1);
   console.log(colors);
   for(let i in colors){
      console.log(colors[i]);
   }
}
displayColors1(msg, "Red");
displayColors1(msg, "Red", "Blue");
displayColors1(msg, "Red", "Blue", "Green");
console.log("**************************************");

//***************************************************************************************************************** */
//Spread Operator (...) is used to spread an array elements into parameters.
//Usage in code: ...array_variable_name
//****************************javascript way */
// function sum3(x, y, z) {
//     return x+y+z;
//    }
//    let args1 = [1, 2, 3];
//    let add1 = sum3.apply(null, args1); 
//    console.log(add1);

// //******************************ES6 way */
// function sum4(x, y, z) {
//     return x+y+z;
//    }
//    let args2 = [1, 2, 3];
//    let add2 = sum4(...args2);
//    console.log(add2); 
   
//Spread Operator can be used for
//#1 Concatenation of arrays
// var parts = ["shoulder", "knees"];
// var bodyParts = ["head", ...parts, "and", "toes"]; 
// console.log(bodyParts);
// //#2 Math Functions
// let numbers = [9, 4, 7, 1];
// console.log(Math.max(...numbers));
// //#3 Destructuring arrays and objects.
// let [x1, y1, ...z1] = [1,2,3,4,5,6];   //would mean x = 1, y = 2, z = [3,4,5,6]      
// console.log(z1 + " " + typeof z1);
// let {x2, y2, ...z} = {x2: 1, y2: 2, z2: 3, a: 4};    //  would mean x = 1, y = 2, z = { z: 3, a: 4 }   
// console.log(x2);
// console.log(z + " " + typeof z);
// //#4 Pushing an array into another array
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// arr1.push(...arr2);
// console.log(arr1);


//Hackerrank practice problem
// const sum = (...args) => {
//   var result = 0;
//   args.forEach(function(item){
//      result += item;
//   });
//   return result;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));

//Example from codeevolution
//Display multiple colors --- using typescript
let msg2 = "List of colors";
let displayColors2 = function(msg1, ...colors) {
   console.log(msg1);
   console.log(colors);
   for(let i in colors){
      console.log(colors[i]);
   }
}
let colorsArr = ["Orange", "Black", "Indigo"];
displayColors2(msg2, ...colorsArr);
// displayColors2(msg2, "Red");
// displayColors2(msg2, "Red", "Blue");
// displayColors2(msg2, "Red", "Blue", "Green");
console.log("**************************************");


