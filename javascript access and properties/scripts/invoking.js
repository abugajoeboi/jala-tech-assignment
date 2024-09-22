// Invoke a function using call() and apply(). Also Spot the difference between them. 


// the call() method

const messageCall = greet.call(person, 'Hello', '!');
console.log(messageCall); // Output: "Hello, Alice!"



// the app() method 

const messageApply = greet.apply(person, ['Hi', '.']);
console.log(messageApply); // Output: "Hi, Alice."



Differences

//               Argument Passing:

//   call() requires arguments to be passed individually.
//   apply() requires arguments to be passed as an array.


//   call(): func.call(thisArg, arg1, arg2, ...)
//   apply(): func.apply(thisArg, [argsArray])