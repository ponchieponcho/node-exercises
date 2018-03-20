// // Part 1 - Extract a function
// var saveWebPage = function (url, filename, callback) {
//     var request = require('request');
//     const fs = require('fs');

//     request.get(url, (err,res, html) => {
//             fs.writeFile(filename, html, (err) => {
//                 if (err) throw err;
//             })
//         })
//     }      

// saveWebPage('https://en.wikipedia.org/wiki/Continuation-passing_style', 'output.txt', (err) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log('It worked.');
// });

// Part 2 - Extract A Function 2
var downloadAndCreateThumbnail = function (imageUrl, filename, thumbnailFilename, callback) {
    const fs = require('fs');
    const gm = require('gm');
    const request = require('request');

    const requestOptions = {
        url: url,
        encoding: null
    };
    request(requestOptions, (err, response, data) => {
        if (err) {
            console.log(err.message);
            return;
        }

        fs.writeFile(filename, data, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            gm(filename)
                .resize(240, 240)
                .write(thumbnailFilename, (err) => {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    console.log('It worked');
                })
        })
    })
}

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';
downloadAndCreateThumbnail(url, filename, thumbnailFilename, (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('It worked');
})