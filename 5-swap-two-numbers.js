// Example 1: Using a Temporary Variable

// var a = 10;
// var b = 20;

// let temp;

// temp = a;
// a = b;
// b = temp;

// console.log("a", a);
// console.log("b", b);




// Example 2: Using es6(ES2015) Destructuring assignment

// var a = 10;
// var b = 20;
// // var b = 20;

// [a, b] = [b, a];

// console.log("a", a);
// console.log("b", b);




// Example 3: Using Arithmetic Operators

// var a = 10;
// var b = 20;

// a = a + b; //10+20 = 30
// b = a - b; //30-20 = 10
// a = a - b; // 30-10 = 20
// console.log("a", a);
// console.log("b", b);



// Example 4: Using Bitwise XOR operator

let a = 10;
let b = 20;
// XOR operator
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
