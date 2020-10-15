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