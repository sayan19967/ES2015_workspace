// var var1 = "sayan";
// console.log(typeof var1);
// var typeofVar1 = "string";
// if(typeofVar1 === typeof var1){
//     console.log("typeof returns as a string");
// }

// var var1 = true;
// console.log(typeof var1);
// var typeofVar1 = "boolean";
// if(typeofVar1 === typeof var1){
//     console.log("typeof returns as a string");
// }

// var1 = 10.365;
// console.log(typeof var1);
// var typeofVar1 = "number";
// if(typeofVar1 === typeof var1){
//     console.log("typeof returns as a string");
// }

// var1 = {
//     name: "sayan"
// }
// console.log(typeof var1);
// var typeofVar1 = "object";
// if(typeofVar1 === typeof var1){
//     console.log("typeof returns as a string");
// }
//****************************************************************************** */

// a = 10;
// console.log(a);
// car = new Object(); //object creation using new Object()
// car.model = "Lexus";
// car.price = 10390000;
// console.log(car);

// var obj = {
//     name: "person1", 
//     Salary: 25000, 
//     Role: "Tester", 
//     skills: {                   //nested object
//         skill1: "JAVA",
//         skill2: "Selenium"
//     }
// };
// obj.Company = "TCS";
// console.log(obj);
// delete obj.Salary;  //deleting property from an object
// console.log(obj);

//******************************************************************************* */

// var myArray = ["sayan", "soham", "souvik"];
// console.log(myArray[0]);
// console.log(myArray[3]);
// console.log(myArray.length);
// myArray[3] = "Arghodeep";
// console.log(myArray.length);

// //console.log(myArray);

// // myArray["name"] = "Abishek";
// // myArray["name1"] = "Abishek1";
// // myArray["name2"] = "Abishek2";

// console.log(myArray);
// myArray.push("Sajjan");
// console.log(myArray.length);
// myArray.pop();
// console.log(myArray.length);

//******************************************************************************* */

// var numbers = [3,342,23,22,124];
// numbers.sort(function(a,b){return a-b;});
// console.log(numbers[numbers.length-1]);


//sort the below array alphabetically by their title
// var library = [ 
//         { author: 'Bill Gates', title: 'The Road ahead', libraryID: 1254},
//         { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
//         { author: 'Steve Jobs', title: 'walter Isaacson', libraryID: 4264}, 
//         { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245},
//         { author: 'Sayan Halder', title: 'walter street', libraryID: 4568 }
//      ]; 
//      console.log(library[0].title + "++++++++++++");

//     var sortByTitle = function(a,b){
//         var len = 0;
//         if(a.title === b.title){
//             return 0;
//         }
//         if(a.title.length<b.title.length){
//             len = a.title.length;
//         }else{
//             len = b.title.length;
//         }
//         for(i=0; i<len; i++){
//             if(a.title[i]<b.title[i]){
//                 return -1;
//             }else if(a.title[i]>b.title[i]){
//                 return 1;
//             }else{
//                 continue;
//             }
//         }
//     };

// library.sort(sortByTitle);
// console.log(library);

// var date_obj = new Date(2016,10,1);
// //month_day = date_obj.getDay();
// //month_date = date_obj.toDateString();
// var month_day = date_obj.getDate();
// //month_date = date_obj.getMonth();
// console.log(month_day);

//function as a value
// var f = function()
// {
//     console.log("Hello function as a value");
// };
// f();  /*  returns "Hello" */

//function as argument to another function
// var f = function()
// {   console.log("Hello function as argument");
// };
// var executor = function(fn)
// {  fn();
// }
// executor(f);

//function as a property
// var myObj = {
//     "testProp" : true
//    };
//    myObj.prop1 = function(a,b) {
//     console.log ("Function in object");
//     console.log(a+b);
//    };
//    myObj.prop1(10,20);

//function with varied number of arguments using implicit argument in JvaScript called "arguments"
//    var add = function()
//    {  var i, sum = 0;
//      for (i=0; i< arguments.length; i++)
//     {  sum += arguments[i];
//      }
//      return sum;
//    };
   
//    console.log(add(1,2,3,4,5,6,7,8,9,10));  /* 10 arguments*/
//    console.log(add(1,2,3,4,5));  /* 5 arguments*/

   //fibonacci sequence
//    function fibonacciSequence(input) {
//     //Type your code here.
//     var arr = [], a=0, b=1;
//     arr[0] = a;
//     arr[1] = b;
//     for(var i=2; i<=input; i++){
//         arr[i] = a + b;
//         a = b;
//         b = arr[i];
//     }
//     return arr;
// }
// console.log(fibonacciSequence(5));

//object constructor
// function Car(brand, price, year){
//     this.brand = brand;
//     this.price = price;
//     this.year = year;

// }
// var car1 = new Car("Mercedes", 5000000, 2019);
// var car2 = new Car("BMW", 4500000, 2018);
// var car3 = new Car("AUDI", 6000000, 2020);
// car1.type = "Sedan";
// car2.type = "Hatchback";
// car3.type = "SUV";
// car3.fourWheelDrive = true;
// console.log(car1);
// console.log(car2);
// console.log(car3);

//Array forEach method
// var myArray1 = [10, 20,"Sayan", {}];
// var myFun = function(item, index, myArrayTemp){
//     console.log("For an element " + item + "from index: " + index + " and full array is : " + myArrayTemp);
// }
//myArray1.forEach(myFun);

//*********************************************************************************************************** */
//generating random character ID in javascript
// function stringGen() {
//     //Type your code here.
//     var lenText = document.getElementById("num").value;
//     console.log("value from document: " + lenText);
//     var len = parseInt(lenText);
//     console.log("length: " + len);
//     var text = "";
//     var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
//     for(var i=0; i<len; i++){
//       text += char_list[Math.floor(Math.random() * char_list.length)];
//     }
//     document.getElementById("result").innerHTML = text;
//     console.log(text);
//     return text; //Enter your return statement
// }
//  stringGen();
//********************************************************************************************************** */

// var i = 1; 
// if (function f(){}) 
// { 
//     i += typeof f; 
// } x;

// (function f(){ 
//     function f(){ 
//         return 1; } 
//    return f(); 
//   function f()
//    { return 2; } })();


//*************************************************************************************************************************** */
//Creating a simple UI calculator using JavaScript
// var textScreen = "";
// var inputValText = "";
// function update(value) {
//     //Type the code here.
//     value = value.trim();
//     inputValText += value;
//     var len_inputValText = inputValText.length;
//     if(len_inputValText>=2){
//         if(inputValText[len_inputValText-1] === "+" || inputValText[len_inputValText-1] === "-" || inputValText[len_inputValText-1] === "*" || inputValText[len_inputValText-1] === "/"){
//             if(inputValText[len_inputValText-2] === "+" || inputValText[len_inputValText-2] === "-" || inputValText[len_inputValText-2] === "*" || inputValText[len_inputValText-2] === "/"){
//                 console.log("just before deleting inputValText" + inputValText);
//                 inputValText = "";
//                 console.log("after deleting: " + inputValText)
//             }
//         }
//     }
//     textScreen = value;
//     console.log(textScreen);
//     document.getElementById("screen").value = textScreen;
// }

// function result() {
//     //Type the code here.
// //    inputValText = document.getElementById("screen").value;
//     console.log(inputValText);
//     if(inputValText.includes("+")){
//         var expArr = inputValText.split("+");
//         var expRes = parseInt(expArr[0]) + parseInt(expArr[1]); 
//         inputValText = "" + expRes;
//         console.log("Addition of " + expArr[0] + " and " + expArr[1] + " : " + expRes);
//         document.getElementById("screen").value = expRes;
//         console.log(document.getElementById("screen").value);
//         console.log(typeof document.getElementById("screen").value);
//     }else if(inputValText.includes("-")){
//         var expArr = inputValText.split("-");
//         var expRes = parseInt(expArr[0]) - parseInt(expArr[1]); 
//         inputValText = "" + expRes;
//         console.log("Subtraction of " + expArr[0] + " and " + expArr[1] + " : " + expRes);
//         document.getElementById("screen").value = expRes;
//     }else if(inputValText.includes("*")){
//         var expArr = inputValText.split("*");
//         var expRes = parseInt(expArr[0]) * parseInt(expArr[1]); 
//         inputValText = "" + expRes;
//         console.log("Multiplication of " + expArr[0] + " and " + expArr[1] + " : " + expRes);
//         document.getElementById("screen").value = expRes;
//     }else if(inputValText.includes("/")){
//         var expArr = inputValText.split("/");
//         var expRes = parseInt(expArr[0]) / parseInt(expArr[1]); 
//         inputValText = "" + expRes;
//         console.log("Division of " + expArr[0] + " and " + expArr[1] + " : " + expRes);
//         document.getElementById("screen").value = expRes;
//     }
// }

// function form_reset() {
//     //Type the code here.
//     textScreen = "";
//     inputValText ="";
//     document.getElementById("screen").value = textScreen;
// }

//************************************************************************************************************ */
//creating HTML elements using JavaScript
// var myParagraph = document.createElement("p");
// var myText = document.createTextNode(" text added using JS ");
// myParagraph.innerHTML = " added innerhtml text using JS ";
// myParagraph.innerText = " added innertext using JS ";
// myParagraph.appendChild(myText);
// document.body.appendChild(myParagraph);


// //************************************************************************************************************ */
// function myFunction() {
//     // Type your code here.

//     var myName = document.getElementById("myname").value;
//     var myPhone = document.getElementById("myphone").value;
//     var myCountry = document.getElementById("mycontry").value;
//     var myEmail = document.getElementById("mymail").value;
//  //   window.alert(myName + "," + myPhone + "," + myCountry + "," + myEmail);
//  var resAlertText = myName + "," + myPhone + "," + myCountry + "," + myEmail;
//     window.alert(resAlertText);
//     return resAlertText;//Enter your return statement here
//   }
/********************************************************************************************************* */


function runList(){
    //Type your code here.

    var newCountryName = document.getElementById("txtbox").value; //getting input country name
    var newOption = document.createElement("option");   //creating new option element
    var newoptionChild = document.createTextNode(newCountryName);   //creating new child text node
    newOption.appendChild(newoptionChild);
    var selectTagVar = document.getElementById("list");
    selectTagVar.appendChild(newOption);
//    document.appendChild(selectTagVar);

}
//console.log(typeof runList);
//******************************************************************************************************** */
// var i = 1; 
// if (function f(){}) 
// { 
//     i += typeof f; 
//     console.log("inside if block");
// }
// console.log(i);

//****************************************************************************************************************************************************** */
//Javascript with AJAX and JQUERY
// window.onload = function(){
//     var http;
//     http = new XMLHttpRequest();
// //    console.log(http);
//     http.onreadystatechange = function readyStateChangeFn(){
//         if(http.readyState === 4 && http.status === 200){
//         //    console.log(http);
//             console.log(JSON.parse(http.response).tweets[0].content + JSON.parse(http.response).tweets[1].content);
//         //    console.log(JSON.parse(http.response).tweets[1].content);
//             document.getElementById("myPTag").innerHTML = JSON.parse(http.response).tweets[0].content + JSON.parse(http.response).tweets[1].content;
//         }
//     }
//     http.open("GET", "data/tweets.json", true);    //true = asynchronous and false = synchronous
// //    console.log(http);
//     http.send();
// //    console.log(http);
// //    console.log("test");

// //jquery method
//     $.get("data/tweets.json", function(data){
//         console.log(data);
//         console.log(typeof data);
//     });
//     console.log("test");
// }








  







