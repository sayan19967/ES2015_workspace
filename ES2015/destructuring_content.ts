//Destructuring an array let's us extract multiple values from an array at the same time
//Here 1:1 mapping is done between the arrays and corresponding 
let employee2 = ["Ji-hyun", "Jun", "Female"];
let [fname, lname, gender="Male"] = employee2;  //default value will be "Male" if nothing is assigned to gender variable
console.log(fname);
console.log(lname);
console.log(gender);
let [fn, ...details] = employee2;
console.log(details);





