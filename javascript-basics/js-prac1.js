// Objects in JavaScript

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

const car = new Object()
car.make = "Toyota";
car.model = "Corolla";
car.year = 2025;

console.log(person, car);
console.log(person["firstName"]); // For Dynamic properties, use [] notation.
person.gender = "Male";

const calculator = { // Two values only. Demonstrating Object Methods.
    value: 0,
    add: function(x, y) {
        this.value = x + y;
        return this.value;
    },

    subtract(x, y){
        this.value = x - y;
        return this.value;
    },

    multiply(x, y){
        this.value = x * y;
        return this.value;
    },

    divide(x, y){
        this.value = x / y;
        return this.value;
    },
    // arrow function
    reset: () => {
        this.value = 0;
    }
}

console.log(calculator.add(10, 10));
console.log(calculator.multiply(15, 2));
console.log(calculator.subtract(100, 1));
console.log(calculator.divide(2, 4));

// Constructor Function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
        return this.firstName + " " + this.lastName; // Constructor Function Method
    }
}

// new Person objects

const johnCena = new Person ("John", "Cena", 44);
const lebronJames = new Person ("Lebron", "James", 41);
const derrickRamsey = new Person ("Derrick", "Ramsey", 56);

lebronJames.rings = 6;

console.log(lebronJames.rings);
console.log(lebronJames.fullName());


lebronJames.heShoots = function(){
    action = "he SCORES";
    return action;
}

console.log(lebronJames.heShoots());
