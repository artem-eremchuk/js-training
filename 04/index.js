//Task 1. Create p and div.
const body = document.querySelector('body')
const p = document.createElement('p');
const div = document.createElement('div');

p.classList.add('text');
p.innerHTML = 'Это всего лишь текст';
p.style.padding = '20px';
p.style.margin = '0px';

div.classList.add('alert');
div.innerHTML = 'А это сообщение об ошибке';
div.style.backgroundColor = '#FF0000';
div.style.color = '#FFFFFF';
div.style.padding = '20px';

body.prepend(p);
p.after(div);



// Task 2. Array and even/odd.
const names = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];

const ol = document.createElement('ol');
ol.style.padding = '0px';

for(let i = 0; i < names.length; i++){
    const li = document.createElement('li');
    li.innerHTML = names[i];
    li.style.padding = '10px';
    li.style.listStyleType = 'none';

    if((i + 1) % 2 === 0){
        li.classList.add('odd');
        li.style.backgroundColor = '#00FF00';
    }
    else{
        li.classList.add('even');
        li.style.backgroundColor = '#1E90FF';
    }

    exitLoops:
    for(let j = 0; j  < names[i].length - 1; j++){
        for(let k = j + 1; k < names[i].length; k++){
            if (names[i][j] === names[i][k]){
                li.style.color = '#FFFFFF';
                break exitLoops;
            }
        }
    }
    ol.append(li);
}

body.append(ol);



// Task 3. function showMessage().
function showMessage(text, color, top, left){
    const div = document.createElement('div');
    div.classList.add('message');

    div.style.position = 'fixed';
    div.innerHTML = text;
    div.style.backgroundColor = color;
    div.style.top = top + 'px';
    div.style.left = left + 'px';
    div.style.padding = '10px';

    body.append(div);
}



// Task 4. Sum value elements 
const ul = document.createElement('ul');
ul.style.padding = '0px';
const arr = [];
let i = 0;

let num = prompt('Введите число');

while (num !== '' && num !== null && !isNaN(num)){
    let sum = arr.reduce((a, b) => a + b, 0);
    arr.push(Number(num) + sum);

    let li = document.createElement('li');
    li.style.listStyleType = 'none';
    li.style.fontSize = '20px';
    li.style.fontWeight = 700;
    li.innerHTML = arr[i];
    ul.append(li);
    i++;

    num = prompt('Введите число');
}

body.append(ul);