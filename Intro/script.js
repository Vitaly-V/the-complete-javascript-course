
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

/*
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
*/

// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageMary);

function yearsUntilRetirement(name, yearOfBirth) {
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name +  ' retires in ' + retirement + ' years.');
    } else {
        console.log(name +  ' is already retired.');
    }
}

yearsUntilRetirement('John', 1984);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

// Lecture: Statements and expressions
/*
function someFun(par) {
    //code
}

var someFun = function(par) {
    //code
}

// Expressions
3 + 4;
var x = 3;

// Statements

if (x === 5) {
    //do something
}
*/

// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();

console.log(john);

//alert(john.indexOf('Smith'));

if (john.indexOf('teacher')  === -1) {
    console.log("John is not a teacher");
}
*/

// Lecture: Objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
}

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john.job = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

// Lecture: Objects and methods

// v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2017 - this.yearOfBirth;
    }
}

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/
/*
// v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        //return 2017 - this.yearOfBirth;
        this.age = 2017 - this.yearOfBirth;
    }
}
john.calculateAge();
console.log(john);

var mike = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1950,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        //return 2017 - this.yearOfBirth;
        this.age = 2017 - this.yearOfBirth;
    }
}
mike.calculateAge();
console.log(mike);
*/


// Lecture: Loops
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/

//var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
/*
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
*/
/*
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 0; i <= 5; i++) {
    console.log(i);
    if (i === 1) {
        continue;
    }
    if (i === 3) {
        break;
    }
}
*/


// Code challenge 2
/*
var years1 = [1958, 1984, 1986, 2008, 2016];
var years2 = [1953, 1999, 2001, 2008, 2010];

function printFullAge(ages) {
    var now = 2017;
    var yearsOld = [];
    var isFullAgeArr = [];

    for (var i = ages.length - 1; i >= 0; i--) {
        yearsOld.push(now - ages[i]);
    }

    for (var i = yearsOld.length - 1; i >= 0; i--) {
        if ( yearsOld[i] >= 18 ) {
            isFullAgeArr[i] = true;
        } else {
            isFullAgeArr[i] = false;
        }
    }
    return isFullAgeArr;
}

var full1 = printFullAge(years1);
var full2 = printFullAge(years2);
console.log(full1);
console.log(full2);
*/
