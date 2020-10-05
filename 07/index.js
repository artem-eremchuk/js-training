// Task 2. Modal
function Modal(){
    this.show = function(){
        console.log(`show ${this.name}`);
    };
    
    this.hide = function(){
        console.log(`hide ${this.name}`);
    };
}

function Warning(name, message){
    this.name = name;
    this.message = message;
};

function Success(name, message){
    this.name = name;
    this.message = message;
};

Warning.prototype = new Modal;
Success.prototype = new Modal;



// Task 3. Bingo
Object.prototype.bingo = function(){
    for (let key in this){
        if(key.match('bingo') && typeof this[key] !== 'function'){
            console.log('Bingo!');
        }
    }
};

const obj = {
    bingoBall: 2
};

const obj2 = {
    bingeBall: 2
};



// Task 4. Class
class Anouncer {
    present(){
        console.log(`Hello, I am ${this.type} and I have size ${this.size}`);
    }
}

class Figure extends Anouncer {
    constructor(size){
        super();
        this.size = size;
    }
}

class Circle extends Figure {
    constructor(size, type){
        super(size);
        this.type = type;
    }
    getArea(){
        return Math.PI * Math.pow(this.size, 2);
    }
}

class Square extends Figure {
    constructor(size, type){
        super(size);
        this.type = type;
    }
    getArea(){
        return Math.pow(this.size, 2);
    }
}



// Task 5. Number prototype.
Number.prototype.add = function(num){
    return this.valueOf() + num;
};

Number.prototype.multiply = function(num){
    return this.valueOf() * num;
};

Number.prototype.divide = function(num){
    return this.valueOf() / num;
};

Number.prototype.minus = function(num){
    return this.valueOf() - num;
};




