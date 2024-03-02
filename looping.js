// for of use on array or string not in object 
// for in use in object 

const numbers = [1, 6, 8, 4];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }
// while

// array
for(const num of numbers){
    // console.log(num);
}
// string
const nobab = 'siraj Ud Doula';
for(const char of nobab){
    // console.log(char);
}


const glass = {
    name : 'Glass',
    price: 100, 
    color : 'golden', 
    isCleaned : true
};

// for(const key of glass){
//     console.log(key);
// }

for(const key in glass){
    const value = glass[key];
    // console.log(key, ' : ', value);
}

// optional
const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    const value = glass[key];
    console.log(key, ' : ', value);
}