//Task 1. Object Car.
const car = {
    model: 'Ford Model T',
    yearIssue: 1908, 
    assembly: 'USA'
}

for (key in car){
    console.log(`${key} -> ${car[key]}`);
}



// Task 2. Copy object user.
const user = {
    name: 'John',
    email: 'john@gmail.com',
    phone: 9171234567,
    id: 'u120147'
}

const newUser = Object.assign({}, user);



// Task 3. Object Circle
const circle = {
    radius: 10, 
    color: 'red',
    calculateCircumference: function() {
        console.log(2 * Math.PI * this.radius);
    }
}



// Task 4. Object Message
const message = {
    getMessage: function(string){
        this.text = string;
    },
    showMessage: function(){
        alert(this.text);
    }
}



// Task 5. Object Rectangle
const rectangle = {
    height: 20,
    width: 10,
    getArea: function(){
        return this.height * this.width;
    } 
}



// Task 6. function isEmpty()
function isEmpty(obj) {
    for(var key in obj)
    {
        return false;
    }
    return true;
}



// Task 7. Object selfGeneratedUser
const selfGeneratedUser = {
    getInfo: function(){
        const questions = ['name', 'email', 'phone'];
        for (let i = 0; i < questions.length; i++){
            selfGeneratedUser[questions[i]] = prompt(`Enter your ${questions[i]}`);
        }
    },
    introduce: function(){
        for (key in selfGeneratedUser){
            if (typeof selfGeneratedUser[key] !== 'function' && selfGeneratedUser[key] !== ''){
                alert(selfGeneratedUser[key]);
            }
        }
    }
}



//Task 8. Object Dog
const Dog = function(name,  breed, age){
    this.name = name; 
    this.breed = breed; 
    this.age = age;

    this.intro = function(){
        console.log(`Woof! I am ${this.name}, and I am ${this.age}. I am ${this.breed}.`);
    };

    this.bark = function(){
        let woof = '';
        for (let i = 0; i < this.age; i++){
            (i === (this.age - 1)) ? woof += 'woof!' : woof += 'woof! ';
        }
        console.log(woof);
    };

    this.comeHere = function(word){
        console.log((word === this.name) ? 'arf-arf' : '');
    };

    this.teach = function(skill){
        if(!this.hasOwnProperty('skills')){
            this.skills = [];
        }
        else if(this.skills.length >= 4){
            this.bark = function(){
                console.log(`Hm. I am smarter than you. I have at least ${this.skills.length} skills. Do it yourself!.`);
            }
        }
        this.skills.push(skill);
    }
}