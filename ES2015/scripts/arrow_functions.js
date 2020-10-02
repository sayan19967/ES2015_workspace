"use strict";
var getVal = function () {
    return 10;
};
console.log(typeof getVal);
function fn1() {
    return 20;
}
console.log(typeof fn1);
//Arrow function
var arrowFunc = function (basic, bonus) {
    return 10 * basic + bonus;
};
console.log(arrowFunc(1400, 5000));
//Arrow function with a single parameter and a single line 
var arrowFunc1 = function (m) { return 10 * m; }; //if a single parameter then no need for first brackets and also of a single line in function then also no need for 2nd brackets 
//and also no need for return
console.log(arrowFunc1(1500));
//this keyword
var employee = {
    id: 1,
    greet: function () {
        //    var id = 15;
        var self = this;
        setTimeout(function () { console.log(self.id + " using traditional function"); }, 2000); //here outer this is being shadowed by inner one
    }
};
employee.greet();
//alternate ES6 way
var employee1 = {
    id: 1,
    greet: function () {
        var _this = this;
        //    var id = 15;
        //    var self = this;
        setTimeout(function () { console.log(_this.id + " using arrow function"); }, 2000); //here outer this is not being shadowed by inner one
    }
};
employee1.greet();
//# sourceMappingURL=arrow_functions.js.map