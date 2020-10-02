function greetPerson1(name: string){
    let greet;
    if(name === "sayan"){
        let greet = "Hi Sayan";
    }else{
        let greet = "Oops! You not Sayan, bye!";
    }

    console.log(greet);
}
greetPerson1("sayan");

var a = 1;
var b = 2;
if(a === 1){
    var a = 10;
    let b = 20;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);

var c = 1;
var c = 2;
let d = 1;
//let d = 2;