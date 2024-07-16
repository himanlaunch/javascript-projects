
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(number){}
};

module.exports = launchcode;

launchcode.launchOutput = function(number) {
    let output = '';
  
    if (number % 2 === 0) {
      output += 'Launch';
    }
  
    if (number % 3 === 0) {
      output += 'Code';
    }
  
    if (number % 5 === 0) {
      output += ' Rocks';
    }

    if (output === '') {
      output = "Rutabagas! That doesn't work";
    }
  
    return output + '!';
  };