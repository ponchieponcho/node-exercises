// Any live cell with fewer than two live neighbours dies, 
// as if caused by underpopulation.

// Any live cell with two or three live neighbours lives on 
// to the next generation.

// Any live cell with more than three live neighbours dies, 
// as if by overpopulation.

// Any dead cell with exactly three live neighbours becomes a 
// live cell, as if by reproduction.

var firstGeneration = [
    [{nb:0,state:false},{nb:0,state:false},{nb:0,state:false},{nb:0,state:false},{nb:0,state:false}],
    [{nb:0,state:false},{nb:0,state:false},{nb:0,state:true},{nb:0,state:false},{nb:0,state:false}],
    [{nb:0,state:false},{nb:0,state:false},{nb:0,state:true},{nb:0,state:false},{nb:0,state:false}],
    [{nb:0,state:false},{nb:0,state:false},{nb:0,state:true},{nb:0,state:false},{nb:0,state:false}],
    [{nb:0,state:false},{nb:0,state:false},{nb:0,state:false},{nb:0,state:false},{nb:0,state:false}]
]

var ast = "*";
var space = " ";
var r = 3; //start from rows 3
var c = 5; //start from col 5
var myArray = [
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1]
]; //d

var rows = 8;
var cols = 7;

var displayArray = function() {
    // for (var i=0; i < firstGeneration.length; i++) {
    //     newArray.push([]);
    //     for (var b=0; b < firstGeneration.length;b++ ) {
    //         while(firstGeneration[i][b].state===false) {
    //             newArray.push("false")
    //             break
    //         }
    //         while(firstGeneration[i][b].state===true) {
    //             newArray.push("true")
    //             break
    //         }
            
    //     }
    // }
    // expand to have the correct amount or rows
for( var i=r; i<rows; i++ ) {
    myArray.push( [] );
  }
  
  // expand all rows to have the correct amount of cols
  for (var i = 0; i < rows; i++) {
      for (var j =  myArray[i].length; j < cols; j++) {
          myArray[i].push(0);
      }
  }
}

displayArray();