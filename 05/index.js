// const user = {
//     name: 'Artem',
//     email: 'eremchuk.it@gmail.com',
//     password: 'qwerty',
// }

// const inputEmail = document.querySelector('.input__email');
// const inputPW = document.querySelector('.input__pw');
// const btn = document.querySelector('.form__btn');
// const form = document.querySelector('form');
// const greetingBlock = document.querySelector('.greeting');
// let greetingHeader = document.querySelector('.greeting__header');
// let formHeader = document.querySelector('.form__header');


// form.addEventListener('input', function(){
//     if(form.elements['email'].value === '' || form.elements['password'].value === ''){
//         btn.setAttribute("disabled", "disabled");
//     }
//     else {
//         btn.removeAttribute('disabled');
//     }
// })

// inputEmail.addEventListener('input', function(event){
//     if (String(event.target.value).length === 0){
//         inputEmail.classList.add('invalid');
//         inputEmail.placeholder = "Enter email";
//     }
//     else {
//         inputEmail.classList.remove('invalid');
//         formHeader.innerHTML = `Login Form`;
//         formHeader.style.color = `black`;
//     }
// })

// inputPW.addEventListener('input', function(event){
//     if (String(event.target.value).length === 0){
//         inputPW.classList.add('invalid');
//         inputPW.placeholder = "Enter password";
//     }
//     else {
//         inputPW.classList.remove('invalid');
//         formHeader.innerHTML = `Login Form`;
//         formHeader.style.color = `black`;
//     }
// })

// btn.addEventListener('click', function(event){
//     if(form.elements['email'].value === user.email && form.elements['password'].value === user.password){
//         event.preventDefault()
//         form.style.display = 'none';
//         greetingBlock.style.display = 'block';
//         greetingHeader.innerHTML += ` ${user.name}!`;
//     }
//     else {
//         event.preventDefault()
//         formHeader.innerHTML = `Invalid Password. Try again.`;
//         formHeader.style.color = `red`;
//         form.elements['email'].value = '';
//         form.elements['password'].value = '';
//         inputEmail.classList.remove('invalid');
//         inputPW.classList.remove('invalid');
//         btn.setAttribute("disabled", "disabled");
//     }
// })

const user = {
    name: "Artem",
    email: "eremchuk.it@gmail.com",
    password: "qwerty",
};

const inputs = [...document.querySelectorAll(".input__email, .input__pw")];
const btn = document.querySelector(".form__btn");
const form = document.querySelector("form");
const greetingBlock = document.querySelector(".greeting");
const greetingHeader = document.querySelector(".greeting__header");
const formHeader = document.querySelector(".form__header");

inputs.forEach((element) => element.addEventListener("input", inputHandler));

btn.addEventListener("click", function (event) {
    event.preventDefault();

    if (inputs.every((input) => input.value === user[input.name])) {
        form.style.display = "none";
        greetingBlock.style.display = "block";
        greetingHeader.innerHTML +=  ` ${user.name}!`;
    } else {
        formHeader.innerHTML = 'Invalid Password. Try again';
        formHeader.style.color = 'red';
        form.reset();
        setButtonDisabled();
    }
});

function setButtonDisabled() {
    btn.disabled = inputs.some((input) => !input.value);
}

function inputHandler(event) {
    const hasInvalidClass = event.target.classList.contains("invalid");

    if (event.target.value.length === 0 && !hasInvalidClass) {
        event.target.classList.add("invalid");
        event.target.placeholder = `Enter ${event.target.type}`;
        btn.setAttribute("disabled", "disabled");
    }

    if (event.target.value.length > 0 && hasInvalidClass) {
        event.target.classList.remove("invalid");
    }

    if (formHeader.innerHTML !== "Login Form") {
        formHeader.innerHTML = "Login Form";
        formHeader.style.color = "black";
    }

    setButtonDisabled();
}