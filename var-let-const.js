//  now i will show you what is difference of var and let and const 

//  var : do not prefer to use var 
//  let : sometimes use let 
//  const : try to use it

// let's know about var 
// var < -- when you declare a variable in javascript then you must be write this "var" keyword

var test = "my name is meheraz";
// you will be reassign it and redeclare it if you want
var test = "my name is rahim";
var test = "my name is karim";
var test = "my name is amin";

// so this is the behavior of var 


// let's know about let 
//  let <--- 

const number = [23, 45, 65, 78, 23, 12, 76, 94];
// number[2] = 43;
number.push(8, 9 ,10);
console.log(number);

//  object
let student = {
    name : "meheraz",
    class : "123"
}

student = {name : 'mosaiyeb'}

console.log(student);

//loop
let sum = 0;
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(sum);


// let sum = 0;

for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(sum);
