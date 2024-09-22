// Add some more properties to an existing function using object prototypes. 

// Let's start with a simple constructor function:\

function Person(name) {
    this.name = name;
}

// Now, we can add properties and methods to the Person prototype:

// Adding a method to greet
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}.`;
};

// Adding a property for age with a default value
Object.defineProperty(Person.prototype, 'age', {
    get() {
        return this._age || 'Age not set';
    },
    set(value) {
        if (typeof value === 'number' && value >= 0) {
            this._age = value;
        } else {
            console.log('Please provide a valid non-negative age.');
        }
    }
});

// Adding a method to display info
Person.prototype.displayInfo = function() {
    return `${this.greet()} I am ${this.age} years old.`;
};


// Now we can create an instance of Person and use the added properties and methods:


const alice = new Person('Alice');

console.log(alice.greet()); // Output: "Hello, my name is Alice."

alice.age = 30; // Set age
console.log(alice.age); // Output: 30

console.log(alice.displayInfo()); // Output: "Hello, my name is Alice. I am 30 years old."

alice.age = -5; // Invalid age
// Output: "Please provide a valid non-negative age."

console.log(alice.displayInfo()); // Output: "Hello, my name is Alice. I am 30 years old."



// In this example, we:

// 1. Added a greet method to the Person prototype that returns a greeting.
// 2. Created an age property with a getter and setter using Object.defineProperty, ensuring that only valid non-negative values can be set.
// 3. Added a displayInfo method that combines the greeting and age information.