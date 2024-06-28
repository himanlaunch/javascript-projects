const exercises = require('./functions/excercises.js');


function makeLine(5) {
    let line = '';
    for (let i = 0; i < 5; i++) {
      line += '#';
    }
    return line;
  }

//   function makeRectangle(width, height) {
//     let rectangle = '';
//     for (let i = 0; i < height; i++) {
//       rectangle += (makeLine(width) + '\n');
//     }
//     return rectangle.slice(0, -1);
//   }