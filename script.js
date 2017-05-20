
// Lecture: variables
/*
var name = 'Vitalii';
console.log(name);

var lastName = 'Vyrodov';
console.log(lastName);

var age = 32;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
var name = 'Vitalii';
var age = 32;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

/*
job = 'programmer';
isMarried = true;

console.log(name + ' is '  + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty two';
job = 'director';

console.log(name + ' is '  + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is '  + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/

// Lecture: operators
/*
var now = 2016
var birthYear = now - 32;

birthYear = now - 32 * 2

console.log(birthYear);


var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageJohn = ageJohn + 1;
ageMark *= 2;

ageMark = ageMark * 2;
console.log(ageJohn);
console.log(ageMark);
*/


// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if (isMarried) {
  console.log('YES!');
} else {
  console.log('NO!');
}

if (isMarried) {
  console.log('YES!');
}

if (23 === '23') {
  console.log('Something to print...');
}
*/

// Lecture: boolean logic and switch
/*
var age = 20;

if (age < 20) {
  console.log('John is a teenager');
} else if (age >= 20 && age < 30){
  console.log('John is a young man.');
} else {
  console.log('John is a man.');
}

var job = 'teacher';
job = prompt('What does John do?');

switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('Johnn drives a cab in Lisabon.');
    break;
  case 'cop':
    console.log('John helps fight crime.');
    break;
  default:
    console.log('John does something else.');
};
*/

var firstPersonName = 'John';
var firstPersonAge = 23;
var firstPersonHight = 171;
var firstPersonScore = firstPersonHight + firstPersonAge * 5;

var secondPersonName = 'Dave';
var secondPersonAge = 23;
var secondPersonHight = 176;
var secondPersonScore = secondPersonHight + secondPersonAge * 5;

var thirdPersonName = 'Mike';
var thirdPersonAge = 23;
var thirdPersonHight = 173;
var thirdPersonScore = thirdPersonHight + thirdPersonAge * 5;

if (firstPersonScore > secondPersonScore && firstPersonScore > thirdPersonScore) {
    console.log('The winner is ' + firstPersonName + ', with score ' + firstPersonScore);
} else if (secondPersonScore > firstPersonScore && secondPersonScore > thirdPersonScore) {
    console.log('The winner is ' + secondPersonName + ', with score ' + secondPersonScore);
} else if (thirdPersonScore > firstPersonScore && thirdPersonScore > secondPersonScore) {
    console.log('The winner is ' + thirdPersonName + ', with score ' + thirdPersonScore);
} else {
    console.log('It is a draw. ' + firstPersonName + ' scored ' + firstPersonScore + ', ' + secondPersonName + ' scored ' + secondPersonScore + ', ' + thirdPersonName + ' scored ' + thirdPersonScore );
}
