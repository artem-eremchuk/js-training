// ========== Task 1. function fizzBuzz(n) ==========

// v 1.0
function fizzBuzz(n){
    for (let i = 1; i <= n; i++){
        if ((i % 3 == 0) && (i % 5 == 0)){
            console.log('FizzBuzz!');
        } 
        else if (i  % 3 == 0) {
            console.log('Fizz');
        }
        else if (i % 5 == 0){
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}

// v 2.0
// function fizzBuzz(n){
//     for (let i = 1; i <= n; i++) {
//         console.log((i % 3 === 0 && i % 5 === 0 && 'FizzBuzz') || (i % 3 === 0 && 'Fizz') || (i % 5 === 0 && 'Buzz') || i);
//     }
// }



// ========== Task 2. function toNumber(value) ==========
function toNumber(value){
    return (isNaN(value)) ? null : +value;
}



// ========== Task 3. function createUser(name, age, height, weight) ==========
function createUser(name, age, height, weight){
    const userName = (isNaN(name)) ? name : null;
    const userAge = (isNaN(age)) ? null : Number(age);
    const userHeight = (isNaN(height)) ? null : Number(height);
    const userWeight = (isNaN(weight)) ? null : Number(weight);

    if (userName == null || userAge == null || userHeight == null || userWeight == null){
        return null;
    }
    else {
        return {
            name: userName, 
            weight: userAge, 
            age: userHeight, 
            height: userWeight,  
            skills: {
                run: (userWeight < 100) ? true : false,
                volleyball: (userWeight < 90 && userHeight > 185) ? true : false,
                videoGames: ((userAge < 18 && userHeight > 140) || userWeight > 130) ? true : false
            }
        }
    }
}



// ========== Task 4. function isPalindrom(word) ==========
function isPalindrom(word){
    let reverseUserWord = '';
    for (let i = word.length - 1; i >= 0; i--){
        reverseUserWord += word[i];
    }
    return (reverseUserWord == word) ? true : false;
}



// ========== Task 5. function quadraticEquation(a, b, c) ==========
function quadraticEquation(a, b, c){
    const d = (b*b) - 4 * a * c;

    if (d < 0){
        return [];
    }
    else if (d == 0) {
        const x1 = ((-b) + (d ** 0.5)) / 2 * a;
        return [x1];
    }
    else {
        const x1 = ((-b) + (d ** 0.5)) / 2 * a;
        const x2 = ((-b) - (d ** 0.5)) / 2 * a;
        return [x1, x2];
    }
}



// ========== Task 6. function getCalendar ==========
function getCalendar(year, month){
    // Порядковый номер первого дня месяца в первой недели
    const serialNumFirstWeek = ((new Date(year, (month - 1)).getDay()) == 0) ? 7 : (new Date(year, (month - 1)).getDay()); 

    // Дней в месяце
    const daysInMonth = new Date(year, month, 0).getDate();

    const monthMatrix = [];
    const row = 5;
    const col = 7;
    let daysCnt = 1;

    // Заполняет массив null
    for (let i = 0; i < row; i++){
        monthMatrix[i] = [];
        for (let j = 0; j < col; j++){
            monthMatrix[i][j] = null; 
        }
    }

    // Заполняет массив порядковыми датами
    for (let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if ((j >= (serialNumFirstWeek - 1) && i == 0) || (i != 0 && daysCnt <= daysInMonth)){
                monthMatrix[i][j] = daysCnt; 
                daysCnt++;
            }
        }
    }
    return monthMatrix;
}