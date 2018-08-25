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
}

console.log(nomnom('maggie', bearSticks)); //maggie devoured bear stix
console.log(nomnom('zoe', 'crap')); //zoe devoured crap
console.log(nomnom('pink','blue')); //pink devoured blue