const max = Math.max(16, 23, 45 ,1, 89, 23);
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers); // must be use three dots 
// console.log(...numbers);
// console.log(arrayMax);


// use sread operator to copy
const friends = [4, 5, 87, 9];
const bondhu = friends;
const dosto = [...friends]; // copy
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);

// advance 
const sonkha = [...friends, 9999]; // add extra eleements while copy
console.log(sonkha);