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
console.log(calculator.divide(2, 4))