// make nuggetizer from video
// input = animal (ie. fish, cow, pig, etc)
// output = animal product (ie fish stix, bacon, etc)

// E5 funtion
function nuggetizer(animal){
    return `${animal} stix`;
}
console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));


// ***********ARROW FUNCTIONS****************
// best practice: name arrow function
const nuggetizer2 = (animal) => {
    return `${animal} jerky`;
}
console.log('deer:', nuggetizer2('deer'));


// INCLASS EXERCISE
// write a function that tells what a person is eating
const bearSticks = nuggetizer('bear');

// dont need to use actual variables for inputs; KEEP THEM GENERIC
const nomnom = (person, food) => {
    return `${person} devoured ${food}`;
};

console.log(nomnom('maggie', bearSticks)); //maggie devoured bear stix
console.log(nomnom('zoe', 'crap')); //zoe devoured crap
console.log(nomnom('pink','blue')); //pink devoured blue


// INCLASS EXERCISE:
//function that takes in a number and 
//return the number plus 3. so input=22, output=25
// const numberAdder = (num) => {
//     return num + 3;
// };
//console.log('num: ', numberAdder(22)); //25
//console.log('num: ', numberAdder(1000)); //1003
//console.log('num: ', numberAdder(19431857)); //19431860


// INCLASS EXERCISE:
// write a function with 2 inputs that prints to DOM
const numberAdder = (num) => {
    const finalNumber = num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
};

// ***will use the function below for a lot of upcoming exercises
//divId= where you want string to print
//first input = what we are putting in; 2nd input = where we want to put text
const printToDom = (stringToPrint, divId) => {
  //  const selectedDiv = document.getElementById('allTheNumbers');
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

numberAdder(22); //25
numberAdder(2); //5
numberAdder(5000); //5003
printToDom('I am ready for lunch', 'feelings');