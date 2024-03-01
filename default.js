// default --> if value is not provided, take this as a default.
function add(num1 = 99, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const result = add(10, 20);
// const result = add(10);
// const result = add();


function fullname(firstName, lastName = ''){
    const full = firstName + " " + lastName;
    return full;
}

function friends(numbs = []){
    
}

function person(human = {}) {

}
