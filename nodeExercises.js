// // Part 1 - Read a file
// const readline = require('readline');
// const fs = require('fs');


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   rl.question('Please enter a file name? ', (answer) => {
//     var fileName = answer;
//     fs.readFile(answer, (err, data) => {
//         if (err) throw err;
//         var fileContents = data.toString();
//         console.log(fileContents.toUpperCase());
//       });
//     rl.close();
//   });

//   rl.on('line', (input) => {
//     console.log(`Received: ${input}`);
//   });

//   rl.on('pause', () => {
//     console.log('Readline paused.');
//   });

//   rl.on('resume', () => {
//     console.log('Readline resumed.');
//   });

// // Part 2 - DNS lookup
// var dns = require('dns');
// const readline = require('readline');
// const fs = require('fs');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   rl.question('Please enter a domain name? ', (answer) => {
//     dns.resolve4(answer, (err, domains) => {
//         if (err) throw err;
//         console.log('Domain name: ' + answer)
//         var domainNameToString = domains.toString();
//         console.log('IP Address: ' + domainNameToString)

//       });
//     rl.close();
//   });

//   rl.on('line', (input) => {
//     console.log(`Received: ${input}`);
//   });

//   rl.on('pause', () => {
//     console.log('Readline paused.');
//   });

//   rl.on('resume', () => {
//     console.log('Readline resumed.');
//   });

// Part 3 - Read and write
// const readline = require('readline');
// const fs = require('fs');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   rl.question('Input file: ', (inputName) => {
//     rl.question('Output file: ', (outputName) => {
//         var fileName = inputName;
//         fs.readFile(inputName, (err, inputData) => {
//             if (err) throw err;
//             var fileContents = inputData.toString();
//             fileContents = fileContents.toUpperCase();
//             fs.writeFile('output.txt', fileContents, (err) => {
//                 if (err) throw err;
//                 console.log('Wrote to file '+outputName);
//               });
//           });
//         rl.close();

//     });
//   });

// // Part 4 - Save a web page
// var https = require('https');
// const readline = require('readline');
// const fs = require('fs');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// var content = "";

// rl.question('URL: ', (url) => {
//     rl.question('Save to file: ', (output) => {
//         https.get(url, function (res) {
//             res.setEncoding('utf8');
//             var rawData = '';
//             res.on('data', function (chunk) {
//                 rawData += chunk;
//             });
//             res.on('end', () => {
//                 fs.writeFile(output, rawData, (err) => {
//                     if (err) throw err;
//                 });
//             });
//         })
//         rl.close();
//     })
// })

// Part 5 - Resize an image


