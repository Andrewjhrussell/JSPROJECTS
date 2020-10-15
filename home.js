console.log('PREPARE TO FIGHT THE DRAGON KING!!!!!!!');
alert("CLICK OK NOW SO YOU DONT GET BURNED BY FIRE!!!!")

var a = 'DRAGON';
console.log(a);

var someNumber = 45;
console.log(someNumber);

//Manipulate DOM with JS


var age = prompt("What is your age?");

document.getElementById('someText').innerHTML = age;

//Numbers in Javascript
var num1 = 20;
num1 = num1 + 50;
console.log(num1);

//Increment num1 by 5
num1++;
var num1 = 25;
num1 = num1 + 5
console.log(num1);

//Decrement num1 by 5
num1--;
var num1 = 25;
num1 = num1 - 5
console.log(num1);

//Divide, multiply *, remainer %
var num1 = 25
num1 = num1 * 100
console.log(num1)

var num1 = 25
num1 = num1 / 5
console.log(num1)

function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName;
    console.log(result);
}
var name = prompt('What is your name?');
greeting(name);

//How do arguments work in functions?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(40, 45);

/*While loops

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

*/
//For loop

for (let num = 0; num < 100; num++) {
    console.log(num);
}

//Data types
let yourAge = 18;                               //number
let youName = 'Bob';                            // string
  
let truth = false;                             // boolean
let groceries = ['apple','banana','oranges']; // array
let random; //undefined
let nothing = null;                           // value null

//Strings in Javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\apple'
console.log(moreFruits);                    //new line
console.log(fruit.indexOf('a'))
console.log(fruit.length);
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit[2]);
console.log(fruit.split(''));
console.log(fruit.split(','));


//Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits= new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[2]); //access value at index 2nd

fruits[0] = 'pear';
console.log(fruits); 


for (let i =0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberries'),fruits); //appends

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());

let someNumbers = [5, 33, 3, 88, 9, 1, 0, 758, 777];
console.log(someNumbers.sort());
console.log(someNumbers.sort(function(a, b) {return a-b}));
console.log(someNumbers.sort(function(a, b) {return b-a}));

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in Javascript
// dictionaries in Python

let student = {
    first: 'BIG',
    last: 'CHIEF',
    age: 777,
    height:9.5,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
        }

};
console.log(student.first);
console.log(student.last);
student.first = 'notMortal';
console.log(student.first);

console.log(student.studentInfo());

// Conditionals, Control frows (if else)
// 25-45 is my target demographic
//&& AND
// || OR
var age = 30

if((age >=18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else{
    status = 'not my audience';
    console.log(status);
}   
//Switch statements
//differentiate between weekday vs weekend
// day 0 --> Sunday
// day 6 --> Saturday
// day 4 --> Thurday --> weekday

switch (6) {
    case 0:
        text ='weekend';
        break;
    case 6:
        text = 'weekend';
        break;
        default:
            text = 'weekday';
}
console.log(text);
