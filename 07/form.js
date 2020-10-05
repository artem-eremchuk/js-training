const user = {
    name: 'Artem',
    email: 'eremchuk.it@gmail.com',
    password: 'qwerty',
}

// -------------------------------- Toggle -------------------------------
const loginBlock = document.getElementById('login');
const registerBlock = document.getElementById('register');
const formBoxBtn = document.getElementById('form__button-box-btn');
const toggleBtnLeft = document.getElementById('toggle-left');
const toggleBtnRight = document.getElementById('toggle-right');

toggleBtnRight.addEventListener('click', () => {
    loginBlock.style.left = '-400px';
    registerBlock.style.left = '50px';
    formBoxBtn.style.left = '110px';
    toggleBtnRight.classList.add('active');
    toggleBtnLeft.classList.remove('active');
})

toggleBtnLeft.addEventListener('click', () => {
    loginBlock.style.left = '50px';
    registerBlock.style.left = '450px';
    formBoxBtn.style.left = '0';
    toggleBtnLeft.classList.add('active');
    toggleBtnRight.classList.remove('active');
})

// -------------------------------- Login In -------------------------------
const inputs = [...document.querySelectorAll('.input__email, .input__pw')];
const loginForm = document.forms['login-form'];
const loginBtn = document.getElementById('login-btn');
const errorMessage = document.querySelector('.login__form-message');

inputs.forEach((element) => element.addEventListener("input", inputHandler));

function inputHandler(event) {
    const hasInvalidClass = event.target.classList.contains("invalid");

    if (event.target.value.length === 0 && !hasInvalidClass) {
        event.target.classList.add("invalid");
        event.target.placeholder = `Enter ${event.target.type}`;
        loginBtn.setAttribute("disabled", "disabled");
    }

    if (event.target.value.length > 0 && hasInvalidClass) {
        event.target.classList.remove("invalid");
        
    }
    errorMessage.style.display = 'none';
    setButtonDisabled();
}

function setButtonDisabled() {
    loginBtn.disabled = inputs.some((input) => !input.value);
}

loginBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (loginForm.elements['email'].value === user.email && 
        loginForm.elements['password'].value === user.password){
        console.log(`User: ${user.name}`);
        loginForm.reset();
    } else {
        errorMessage.style.display = 'block';
        loginForm.reset();
        setButtonDisabled();
    }
});


// -------------------------------- Register -------------------------------
const registerForm = document.forms['register'];
const registerBtn = document.getElementById('register-btn');
const INVALID_CLASS = 'invalid';

function handleClassAdding(domNode, isValid){
    if (isValid){
        domNode.classList.remove(INVALID_CLASS);
    }
    else {
        domNode.classList.add(INVALID_CLASS);
    }
}

const formHelper = {
    login: {
        value: '',
        valid: false,
        checkValidation(){
            const regex = /,|\.|^$/g;
            this.login.valid = !regex.test(this.login.value);
        },
    },
    name: {
        value: '',
        valid: false,
        checkValidation(){
            this.name.valid = this.name.value !== '';
        },
    },
    age: {
        value: '',
        valid: false,
        checkValidation(){
            const regex = /^\d+$/g;
            this.age.valid = regex.test(this.age.value);
        },
    },
    email: {
        value: '',
        valid: false,
        checkValidation(){
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            this.email.valid = regex.test(this.email.value);
        },
    },
    city: {
        value: '',
        valid: false,
        checkValidation(){
            this.city.valid = this.city.value !== '';
        },
    },
    password: {
        value: '',
        valid: false,
        checkValidation(){
            this.password.valid = this.password.value !== '';
        },
    },
    repeatPassword: {
        value: '',
        valid: false,
        checkValidation(){
            this.repeatPassword.valid = this.repeatPassword.value === this.password.value;
        },
    },
    checkFormValidation(){
        for(const key in this){
            if(typeof this[key] !== 'function' && this[key].valid === false){
                return false;
            }
        }
        return true;
    },
    getValue(){
        return {
            login: this.login.value,
            name: this.name.value,
            age: this.age.value,
            email: this.email.value,
            city: this.city.value,
            password: this.password.value,
        }
    }
}

registerForm.addEventListener('input', (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const bindedValidator = formHelper[name].checkValidation.bind(formHelper);

    formHelper[name].value = value;
    bindedValidator();
    registerBtn.disabled = !formHelper.checkFormValidation();
    handleClassAdding(event.target, formHelper[name].valid);
})

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = formHelper.getValue();
    console.log(user);
})