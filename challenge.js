//*********BATTLE OF THE BANDS CHALLENGE*************
//COPIED printToDom function from functions.js
//split into 2 steps---
//  1. print band name
//  2. deal with counter
const printToDom = (stringToPrint, divId) => {
      const selectedDiv = document.getElementById(divId);
      selectedDiv.innerHTML += stringToPrint;
  };

let bandNumber = 1;

const takeNumber = function (bandName) {
  const bandString = `<h3>${bandNumber}. ${bandName}</h3>`;
  bandNumber++;
  printToDom(bandString, 'battleOfTheBands');  // you should already have this function written from the class lecture
};

takeNumber("Galactic Scum"); // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs"); // This should display "2. Underdogs" in the DOM