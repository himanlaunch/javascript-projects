const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];
let numMeals = 6;

function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  
  /// Part A #2: Write a ``for`` loop inside this function
  for (let i = 0; i < numMeals; i++) {
    // Initialize a new meal
    let meal = [];

    // Loop through each category in the pantry
    for (let category of pantry) {
      // Randomly select an item from the current category
      let index = Math.floor(Math.random() * category.length);
      let item = category[index];

      // Add the selected item to the current meal
      meal.push(item);

      // Remove the selected item from the category to avoid reuse
      category.splice(index, 1);
    }

    // Add the assembled meal to the meals array
    meals.push(meal);
  }

  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///


  return meals;
}


function askForNumber() {
  while (true) {
    numMeals = input.question("How many meals would you like to make?");
    
    /// CODE YOUR SOLUTION TO PART B here ///

    // Validate if numMeals is a number and within the range of 1 to 6

    if (!isNaN(numMeals) && Number.isInteger(parseFloat(numMeals)) && parseInt(numMeals) >= 1 && parseInt(numMeals) <= 6) {
      // Convert the validated input to an integer and break the loop
      numMeals = parseInt(numMeals);
      break;
    } else {
      console.log("Please enter a valid integer between 1 and 6.");
    }
  }
  return numMeals;
}


function generatePassword(string1, string2) {
  let code = '';

  /// Code your Bonus Mission Solution here ///

  return code;
}

function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
  let meals = mealAssembly(protein, grains, veggies, beverages, desserts, numMeals);
  console.log(meals)
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
  // let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  // console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

  // let password1 = '';
  // let password2 = '';
  // console.log("Time to run the password generator so we can update the menu tomorrow.")
  // console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};
