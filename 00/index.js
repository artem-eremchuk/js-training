const personName = 'Scrooge';
const personSurname = 'McDuck';
let personAge = 152;

alert(`Hello, world! Встречай, JS! Я ${personName} ${personSurname}, и мне ${personAge}. Рад встрече!`);

const user = {
    'name': 'Sherlock',
    'height': 183,
    'age': 34,
    'isSmokes': true,
    'friends': ['Dr. John H. Watson', 'Mrs Hudson', 'Professor James Moriarty']
}

console.log(user.height);

user.canSingSongs = false;

user.friends = [];

console.log(user);