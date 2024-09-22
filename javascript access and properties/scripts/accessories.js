// Create a Counter with the help of getter and setter accessors. 


// This implementation provides a clear and controlled way to manage the counter using accessors!






class Counter {
    constructor() {
        this._count = 0; // Private property to store the count
    }

    // Getter for the count
    get count() {
        return this._count;
    }

    // Setter for the count
    set count(value) {
        if (typeof value === 'number' && value >= 0) {
            this._count = value; // Update the count if the value is valid
        } else {
            console.log('Please provide a non-negative number.');
        }
    }

    // Method to increment the count
    increment() {
        this._count++;
    }

    // Method to decrement the count
    decrement() {
        if (this._count > 0) {
            this._count--;
        } else {
            console.log('Count cannot be negative.');
        }
    }

    // Method to reset the count
    reset() {
        this._count = 0;
    }
}

// Example usage
const myCounter = new Counter();
console.log(myCounter.count); // Output: 0

myCounter.increment();
console.log(myCounter.count); // Output: 1

myCounter.count = 5; // Using the setter
console.log(myCounter.count); // Output: 5

myCounter.decrement();
console.log(myCounter.count); // Output: 4

myCounter.reset();
console.log(myCounter.count); // Output: 0

myCounter.count = -3; // Invalid value
// Output: Please provide a non-negative number.
