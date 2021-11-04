const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    // if (!error) functionToRunWhenThingsAreDone(data);
    if (error) {
      functionToRunWhenThingsAreDone(undefined);
    } else {
      functionToRunWhenThingsAreDone(data);
    }
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// breedDetailsFromFile('Bombay', printOutCatBreed);

// export the function
module.exports = breedDetailsFromFile;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
// asyncBreeds.js
const fs = require('fs');

const pritnV = value => {
  console.log(value);
};

const breedDetailsFromFile = function(breed , callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callback(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', pritnV);
console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!
*/

