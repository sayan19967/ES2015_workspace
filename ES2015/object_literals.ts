//If object's property name and it's RHS has same name then only writing one name is enough to cerate the object | same is true for methods inside objects
let firstName = "Sayan";
let lastName = "Halder";

let person = {
    firstName,
    lastName
}
console.log(person.firstName + " " + person.lastName);

let createPerson = (firstName, lastName, age) => {
    return {
        firstName,
        lastName,
        isSenior(){ return age>60; }
    };

}
let person1 = createPerson("Super", "man", 45);
console.log(person1);
console.log(person1.isSenior());

//object property names can also consist of space and variables can also be assigned as property names
let ln = "last name";
let person2 = {
    "first name": "Shin-hye",
    [ln]: "Park"
};
console.log(person2["first name"] + " " + person2["last name"]);
console.log(person2[[ln]]);