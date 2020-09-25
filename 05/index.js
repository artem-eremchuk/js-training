const user = {
    name: 'Artem',
    email: 'eremchuk.it@gmail.com',
    password: 'qwerty',
}

const inputEmail = document.querySelector('.input__email');
const inputPW = document.querySelector('.input__pw');
const btn = document.querySelector('.form__btn');
const form = document.querySelector('form');
const greetingBlock = document.querySelector('.greeting');
let greetingHeader = document.querySelector('.greeting__header');
let formHeader = document.querySelector('.form__header');


form.addEventListener('input', function(){
    if(form.elements['email'].value === '' || form.elements['password'].value === ''){
        btn.setAttribute("disabled", "disabled");
    }
    else {
        btn.removeAttribute('disabled');
    }
})

inputEmail.addEventListener('input', function(event){
    if (String(event.target.value).length === 0){
        inputEmail.classList.add('invalid');
        inputEmail.placeholder = "Enter email";
    }
    else {
        inputEmail.classList.remove('invalid');
        formHeader.innerHTML = `Login Form`;
        formHeader.style.color = `black`;
    }
})

inputPW.addEventListener('input', function(event){
    if (String(event.target.value).length === 0){
        inputPW.classList.add('invalid');
        inputPW.placeholder = "Enter password";
    }
    else {
        inputPW.classList.remove('invalid');
        formHeader.innerHTML = `Login Form`;
        formHeader.style.color = `black`;
    }
})

btn.addEventListener('click', function(event){
    if(form.elements['email'].value === user.email && form.elements['password'].value === user.password){
        event.preventDefault()
        form.style.display = 'none';
        greetingBlock.style.display = 'block';
        greetingHeader.innerHTML += ` ${user.name}!`;
    }
    else {
        event.preventDefault()
        formHeader.innerHTML = `Invalid Password. Try again.`;
        formHeader.style.color = `red`;
        form.elements['email'].value = '';
        form.elements['password'].value = '';
        inputEmail.classList.remove('invalid');
        inputPW.classList.remove('invalid');
        btn.setAttribute("disabled", "disabled");
    }
})












