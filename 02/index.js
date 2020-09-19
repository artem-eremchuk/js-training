//Task 0. function sayHello()
function sayHello(name){
    return (name === 'Mark') ? `Hi, ${name}!` : `Hello, ${name}!`;
}



//Task 1. function min()
function min(a, b){
    return (a < b) ? a : b;
}



//Task 2. function pow()
function pow(x, n){
    return x**n;
}



//Task 3. function isEven(n)
function isEven(n){
    return n % 2 === 0;
}



//Task 4. function deleteChars(str)
function deleteChars(str){
    return str.slice(1, -1);
}



//Task 5. function convertFloor(floor)
function convertFloor(floor){
    if ((floor >= 0 && floor < 13) || (floor < -13)){
        return floor + 1;
    }
    else if ((floor < 0 && floor > -13) || (floor > 13)) {
        return floor;
    }   
}



//Task 6. function convertType(value, toType)
function convertType1(value, toType){
    switch(toType){
        case 'boolean': 
            return Boolean(value);
            break; 
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
            break;
    }
}

const convertType2 = function(value, toType){
    switch(toType){
        case 'boolean': 
            return Boolean(value);
            break; 
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
            break;
    }
}

const convertType3 = (value, toType) => {
    switch(toType){
        case 'boolean': 
            return Boolean(value);
            break; 
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
            break;
    }
}



//Task 7. function transformArray(arr, index1, index2, adding)
function transformArray(arr, index1, index2, adding){
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    for (let i = 0; i < arr.length; i++){
        arr[i] += adding;
    }
    return arr;
}



//Task 8. function digital_root(n)
// function digital_root(num){
//     let len = Number(String(num).length);
//     let strNum = String(num);
//     let sum = 0;

//     for (let j = 0; j < len; j++){
//         for (let i = 0; i < len; i++){
//             sum += Number(strNum[i]);
//         }
//         len = Number(String(sum).length);
//         strNum = String(sum);
//         sum = 0;
//     }
//     return Number(strNum);
// }

function digital_root(num){
    let len = Number(String(num).length);
    let strNum = String(num);
    let sum = 0;

    while(len != 1){
        for (let i = 0; i < len; i++){
            sum += Number(strNum[i]);
        }
        len = Number(String(sum).length);
        strNum = String(sum);
        sum = 0;
    }
    return Number(strNum);
}