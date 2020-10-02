"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var msg = "List of colors";
var displayColors = function (msg1) {
    console.log(msg1);
    //   console.log(arguments);
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
displayColors(msg, "Red");
displayColors(msg, "Red", "Blue");
displayColors(msg, "Red", "Blue", "Green");
console.log("**************************************");
//Using ES6 way ------------------
var displayColors1 = function (msg1) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(msg1);
    console.log(colors);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
displayColors1(msg, "Red");
displayColors1(msg, "Red", "Blue");
displayColors1(msg, "Red", "Blue", "Green");
console.log("**************************************");
//***************************************************************************************************************** */
//Spread Operator (...) is used to spread an array elements into parameters.
//Usage in code: ...array_variable_name
//****************************javascript way */
function sum3(x, y, z) {
    return x + y + z;
}
var args1 = [1, 2, 3];
var add1 = sum3.apply(null, args1);
console.log(add1);
//******************************ES6 way */
function sum4(x, y, z) {
    return x + y + z;
}
var args2 = [1, 2, 3];
var add2 = sum4.apply(void 0, args2);
console.log(add2);
//Spread Operator can be used for
//#1 Concatenation of arrays
var parts = ["shoulder", "knees"];
var bodyParts = __spreadArrays(["head"], parts, ["and", "toes"]);
console.log(bodyParts);
//#2 Math Functions
var numbers = [9, 4, 7, 1];
console.log(Math.max.apply(Math, numbers));
//#3 Destructuring arrays and objects.
var _a = [1, 2, 3, 4, 5, 6], x1 = _a[0], y1 = _a[1], z1 = _a.slice(2); //would mean x = 1, y = 2, z = [3,4,5,6]      
console.log(z1 + " " + typeof z1);
var _b = { x2: 1, y2: 2, z2: 3, a: 4 }, x2 = _b.x2, y2 = _b.y2, z = __rest(_b, ["x2", "y2"]); //  would mean x = 1, y = 2, z = { z: 3, a: 4 }   
console.log(x2);
console.log(z + " " + typeof z);
//#4 Pushing an array into another array
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr1.push.apply(arr1, arr2);
console.log(arr1);
var sum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = 0;
    args.forEach(function (item) {
        result += item;
    });
    return result;
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//# sourceMappingURL=parameters_es6.js.map