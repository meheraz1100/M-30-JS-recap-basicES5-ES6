const glass = {
    name : 'Glass',
    price: 100, 
    color : 'golden', 
    isCleaned : true
};

console.log(glass);
// all property name 
const keys = Object.keys(glass);

// console.log(keys);
// all property value 
const values = Object.values(glass);

// console.log(values);

const entries = Object.entries(glass);
// array of array or two dimensional array
// [
//     [ 'name', 'Glass' ],
//     [ 'price', 100 ],
//     [ 'color', 'golden' ],
//     [ 'isCleaned', true ]
//   ]
// console.log(entries);

// delete
// delete glass.isCleaned;
// console.log(glass);

const {isCleaned, ...shortGlass} = glass
// console.log(shortGlass);

// freeze 
// Object.freeze(glass);
glass.source = 'bangladesh';
glass.price = 1000;
delete glass.name;
console.log(glass);

// seal 

Object.seal(glass);
glass.source = 'bangladesh';
glass.price = 1000;
delete glass.name;
console.log(glass);