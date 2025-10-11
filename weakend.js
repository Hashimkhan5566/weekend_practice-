// 🧠 Part 1: Operators

// Q1. Take two numbers (a = 10, b = 3) and print:

// their sum

// their difference

// their product

// their quotient

// their remainder
let a = 10;
let b = 3;
console.log(a+b);
console.log(a-b);
console.log(a%b);
console.log(a/b);
console.log(a*b);
// Part 2: Condition

// Q2. Write a program that checks if a number is positive, negative, or zero.
// Hint: use if, else if, and else.
let nu = prompt("enter your number that check the positive, negative, zero");
let ni = parseInt(nu);
if(ni<0){
    console.log("the nu is negative");

}
else if(ni>0){
    console.log("the nu is positive");
}
else if(ni==0){
    console.log("the nu is zero");
}
//Q3. Print the multiplication table of any number (for example, 7).
// Hint: use a for loop.

// Q4. Print numbers from 1 to 5 using a while loop.
// Then print numbers 6 to 10 using a do...while loop.
let mul = prompt("enter your number:");
let mul12 = parseInt(mul);
for(let i=1; i<=10; i++){
    console.log(`${mul12}X${i} = ${mul12*i}`);
}
//
let noo = 1;
while(noo<=5){
    console.log(noo);
    noo++;
}
let nou =6;
do{
    console.log(nou);
    nou++;
}while(nou<=10);
// 🧵 Part 4: Strings

// Q5. Take a string "JavaScript" and:

// print its length

// print only "Script" using slice()

// convert it to uppercase
let string = "javascript";
console.log(string.length);
console.log(string.slice(4));
console.log(string.toUpperCase());
//📦 Part 5: Arrays

// Q6. Create an array of 5 numbers.
// Then:

// print its length

// add one new number using splice()

// check if a number exists using includes()

// make a copy of part of it using slice()
let array = [1,2,3,4,5];
console.log(array.length);

array.splice(5,0,6);
console.log(array);
console.log(array.includes(4));
console.log(array.slice(1,3));

//Q8. Write a program using the ternary operator:
// If a number is greater than 10 → print "Big", otherwise "Small".
let no = prompt("enter your greater number");
let n = parseInt(no);
console.log(n>10 ? "greater": "lower");
// 🧩 Part 6: DOM

// Q7. Create an HTML element with this code:

// <div id="box" class="container">Hello</div>


// Now, using JavaScript:

// access this element by ID

// check if it matches class "container" using .matches()

// check if document.body contains this element using .contains()
let id = document.getElementById("child");
console.log(id);

console.log(id.matches(".box"));
console.log(document.body.contains(id));

let func = function(a,b){
  return a+b;
}
console.log(func);