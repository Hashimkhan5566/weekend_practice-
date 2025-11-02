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

// 🧠 Part 1: Basics & Conditions

// Take a number input from the user.

// If it’s even → print “Even number.”

// If it’s odd → print “Odd number.”

// If it’s zero → print “Zero.”

// Take two numbers and check which one is greater using the ternary operator.

let input = prompt("enter the input:");
let num = parseInt(input);
if(num%2==0){
    console.log("this is even");
}
else if(num%2==1){
    console.log("this is odd.");
}
else{
    console.log("this is zero");
}

//\\\\///\\\///\\\///\\\////\\\\\
let a1= 23;
let b1 = 34;
if(a1>b1){
    console.log("the a1 is greater");
}
else if(b1>a1){
    console.log("the b1 is greater");
}
else{
    console.log("the all number is zero.");
}
console.log(a1>b1 && b1>a1 ? "a1 is greater" : "b1 is greater");

// 🔁 Part 2: Loops

// Print numbers from 1 to 10 using a for loop.
// Print the multiplication table of any number using while loop.

// Use a for...of loop to print all values of an array.

// Use a for...in loop to print all keys of an object (like {name:"Ali", age:20}).
//\\\\//\\\///\\\\
for(let i=0; i<=10; i++){
    console.log(i);
}

////\\\\\\/////\\\\\\\
let nomber = prompt("enter your choice number for mutiplication:");
let tran = parseInt(nomber);
for(let i=1; i<=10; i++){
    console.log(`${tran}X${i} = ${tran*i}`);
}

let obj = {
    name:"ali",
    age: "20",
    address: "edeea"
};
for(let key in obj){
    console.log(key);
}
// 🧵 Part 3: Strings & Arrays

// Take a string “JavaScript is powerful.”

// Print its length.

// Convert it to uppercase.

// Use slice() to print only “Script”.

// Create an array of colors.

// Add one new color using push().

// Remove the first color using splice().

// Check if “blue” exists using includes().

let str = "javascript is powerfull";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.slice(4, 10));

let array_color = ["red","blue", "green", "yellow", "bluish"];
console.log(array_color.push("pink"));
console.log(array_color);
console.log(array_color.splice(0,1,"red"));
console.log(array_color);
console.log(array_color.includes("green","blue"));

// 🪄 Part 5: Event Listener Challenges

// Create three buttons: Red, Green, Blue.

// When each is clicked, the background color of the page changes to that color.

// Create an input box and button.

// When the button is clicked, whatever is written in the input should be shown inside a <p> tag below.

// Create a counter app:

// Two buttons: “+” and “–”

// When “+” clicked → number increases

// When “–” clicked → number decreases

// Use event listeners, conditions, and DOM updates.

let btn1 = document.getElementsByClassName("red")[0];
btn1.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
});

let btn2 = document.getElementsByClassName("blue")[0];
btn2.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
});


let btn3 = document.getElementsByClassName("green")[0];
btn3.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
});

//  Create an input box and button.

// When the button is clicked, whatever is written in the input should be shown inside a <p> tag below.

let inp = document.getElementsByClassName("inp")[0];
let p = document.getElementsByClassName("p")[0];
let btn= document.getElementsByClassName("btn3")[0];


btn.addEventListener("click", function(){
    p.innerHTML = inp.value;
});
// Create a counter app:

// Two buttons: “+” and “–”

// When “+” clicked → number increases

// When “–” clicked → number decreases

// Use event listeners, conditions, and DOM updates.

let plus = document.getElementsByClassName("plus")[0];
let minus = document.getElementsByClassName("minus")[0];
let take = document.getElementsByClassName("collect")[0];
let one = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];


let digit_1  = 1;
take.value = digit_1;

let digit_2 = 2;
take.value = digit_2;

let number = 0;
take.value = number;

plus.addEventListener("click", function(){
  number++;
  take.value =number;
});
minus.addEventListener("click", function(){
    number--;
    take.value = number;
});
one.addEventListener("click" , function(){
    take.value = digit_1;
});

two.addEventListener("click",function(){
    take.value = digit_2; 
});

// 🧩 Part 6: Combined Challenge (Mini Project)

// Create a small To-Do List:

// One input box + “Add Task” button

// When you type a task and click Add → the task appears in a list below

// Each task has a “Delete” button to remove it

// Use:

// createElement()

// appendChild()

// removeChild()

// addEventListener()

// Loops for task numbering

let take_task =  document.getElementsByClassName("take_task")[0];

let button = document.getElementsByClassName("task")[0];

let button_2 = document.getElementsByClassName("Delete_task")[0];
let list = document.getElementsByClassName("list")[0];

let english = "";

list.innerHTML += `<li>${take_task.value}</li>`;


button.addEventListener("click", function(){
    list.innerHTML += `<li>${take_task.value}</li>`;
    take_task.value = " ";

});
button_2.addEventListener("click", function(){
    if(list.lastChild){
        list.removeChild(list.lastChild);
    }
});

//1. Basics & Variables (Videos #1–#4)
// 🧪 Easy:

// 👉 Print your name and age using console.log() and combine them using string concatenation and template literals.

let name = "hashim khan";

let age = 34;

console.log(name);
console.log(age);
console.log(`my name is ${name} and my age is ${age} `);
console.log("my name is"+ name + "and my age is "+ age);

// ⚙️ Intermediate:

// 👉 Create a variable radius, calculate the area of a circle, and print the result using both let and const. Explain which should be used and why.
let radius = 23;
const pi = 3.14;
console.log(pi*radius*radius);

//let radius2 =  34;
//const pii = Math.pi(radius2);
//console.log(pii*radius2*radius2);

// 🚀 Complex:

// 👉 Create a small script that asks a user (via prompt) their age and checks if they are eligible to vote (18+). Print a message using both if and ternary operator.
let omaar = prompt("enter your age:");
let omarr = Number(omaar);
if(omarr>18){
    console.log("your age ");

}
else{
    console.log("you are not eligible.");
}
console.log(omarr>18 ? "elgible": "not eligible");

//🧩 2. Operators & Conditionals (Videos #6–#8)
// 🧪 Easy:
     
// 👉 Write a program that checks whether a number is even or odd.
      let digit = 145;
      if(digit%2==0){
        console.log("this is even.");
      } 
     else{
        console.log("this is odd.");
     }
// ⚙️ Intermediate:

// 👉 Use logical operators to check whether a number is divisible by both 3 and 5.
       let digit2 = 234;
       if(digit2%3==0 && digit%5==0){
        console.log("this is even", "this is odd.");
       }

       else{
        console.log("this is odd and", "this is even");
       }
// 🚀 Complex:

// 👉 Create a grading system:

// Input marks → print Grade (A, B, C, D, F) using if-else and then rewrite using switch.
//////////////////////////


// 🧪 Easy:

// 👉 Print numbers from 1 to 10 using a for loop.
     for(i=0; i<=10; i++){
        console.log(i);
    }

// ⚙️ Intermediate:

// 👉 Write a function that takes a number and returns its factorial using a while loop.

    let namber = 5;
    let fact = 1;
    while(namber>0){
        fact=fact*namber;
        namber--;
    }
    console.log(fact);

// 🚀 Complex:

// 👉 Write a function isPrime(num) and return true or false. Use it to print all prime numbers between 1–50.

let ndmber = 456;
let isPrime = true;

if(number<=1){
    isPrime = false;
}
else{
    for(let i=2; i<number; i++){
        if(number%1){
            isPrime = false;
            break;
        }
    }
}
if(isPrime){
    console.log("this is prime.");
}
else{
    console.log("this is not Prime");
}

// 🧪 Easy:

// 👉 Find the length of a string and convert it to uppercase.
let en_str  =  "this is javascript powerfull programming language";

console.log(en_str.length);
console.log(en_str.toUpperCase());


// ⚙️ Intermediate:

// 👉 Write a function that counts vowels in a string.
let eng_str = "this is powerful language";

let counts = "";

for(let stri of eng_str){
    if("aeiou".includes(stri.toLowerCase())){
        console.log("this is vowel");
    }
    else
    {
        console.log("this is not vowels")
    }
    counts++;
}


// 🚀 Complex:

// 👉 Reverse a string manually (without .reverse()).


let reverse = "this is javscript";
let reverse_stri = "";
for(let i=reverse.length-1; i>=0; i--){
    console.log("this is  reverse",reverse_stri);
    reverse_stri+=reverse[i];
}
console.log("this is reverse", reverse_stri);