const bananaDiv = document.getElementById('bananas');
bananaDiv.innerHTML = 'im a banana';

let counter = 0;
// increments by 1 aka take initial counter value and add 1 to it
counter = counter + 1;
counter += 1;
counter ++;

// counter = 3
// use a string @ beginning so you can see which console logs isn't working
console.log('counter: ', counter);

// TEMPLATE LITERAL PRACTICE (use `` for text and ${} for variables)
const greetingElement = document.getElementById('greeting');
const firstName = 'Maggie';
const lastName = 'Leavell';
// greetingElement.innerHTML = 'Hello my name is ' + firstName + ' ' + lastName;
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

