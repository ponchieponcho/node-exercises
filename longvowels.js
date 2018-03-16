// Part 9 - Long-long Vowels
var longLongVowels = function (str) {
    if(str.search(/[o]/) > 0) {
        console.log(str.search(/[o]/));
        var newStr = str.replace('o', 'o'.repeat(4));
    } else if (str.search(/[a]/) > 0) {
        var newStr = str.replace('a', 'a'.repeat(4));
    } else if (str.search(/[e]/) > 0) {
        var newStr = str.replace('e', 'e'.repeat(4));
    } else if (str.search(/[i]/) > 0) {
        var newStr = str.replace('i', 'i'.repeat(4));
    } else if (str.search(/[u]/) > 0) {
        var newStr = str.replace('u', 'u'.repeat(4));
    } else {
        var newStr = str
    };
    return newStr
};

module.exports = {
    leetspeak
}

// // Part 10 - Sum the numbers
// var sumNumbers = function(givenArray) {
//     var totalSum = 0
//     for (var i = 0;i<givenArray.length;i++) {
//         totalSum = totalSum + givenArray[i];
//     };
//     return totalSum;
// };

// var sumMsg = sumNumbers([1,4,8]);
// console.log(sumMsg);

// Part 11 - Just the positives
// Part 12 - Matrix Addition 
// Part 13 - Matrix Multiplication

// Part 14 - Rock Paper Scissors
// var rockPaperScissors = function(playerOneThrow,playerTwoThrow){
// var winner = ""
// if (playerOneThrow=='rock') {
//     if (playerTwoThrow=='rock') {
//     winner = 'draw'
//     } else if (playerTwoThrow=='scissors') {
//     winner = 'player 1'
//     } else if (playerTwoThrow=='paper') {
//     winner = 'player 2'
//     } }
// if (playerOneThrow=='scissors') {
//     if (playerTwoThrow=='rock') {
//         winner = 'player 2'
//     } else if (playerTwoThrow=='scissors') {
//         winner = 'draw'
//     } else if (playerTwoThrow=='paper') {
//         winner = 'player 1'
//     } }
// if (playerOneThrow=='paper') {
//     if (playerTwoThrow=='rock') {
//         winner = 'player 1'
//     } else if (playerTwoThrow=='scissors') {
//         winner = 'player 2'
//     } else if (playerTwoThrow=='paper') {
//         winner = 'draw'
//     } }
//     return winner;
// };

// var gameMsg = rockPaperScissors('rock', 'scissors');
// console.log(gameMsg);
// var gameMsg = rockPaperScissors('rock', 'paper');
// console.log(gameMsg);
// var gameMsg = rockPaperScissors('paper', 'paper');
// console.log(gameMsg);
