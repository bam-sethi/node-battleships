console.log("BATTLESHIPS")

var rows = ["a", "b", "c", "d","e","f","g","h","i","j"]

function Grid(rows, collumns){
  this.cells = [];
  var row;
  for(var r = 0; r < rows.length; r++){
    row = []
    for(var c = 1; c < collumns; c++){
      row.push(rows[r] + [c])
    }
    this.cells.push(row)
  }
}

var grid = new Grid(rows, 10)

console.log(grid.cells)

console.log("Pick a co-ordinate between A1 and J10")

var userInput = ["a1","a2"]

var i;
var j;
for(i = 0; grid.cells.length; i++){
  for(j = 0; grid.cells[i].length; j++){
    for(var u = 0; userInput.length; u++){
      if(grid.cells[i][j] = userInput[u]){
        console.log(grid.cells[i][j] = "hit")
      }
    }
  }
}

console.log(grid.cells)








// for getting  user input
// process.stdin.resume();
//   process.stdin.setEncoding('utf8');
//   var util = require('util');

//   process.stdin.on('data', function (text) {
//     console.log('your move:', util.inspect(text));
//     if 
//     if (text === 'quit\n') {
//       done();
//     }
//   });

//   function done() {
//     console.log('Now that process.stdin is paused, there is nothing more to do.');
//     process.exit();
//   }




