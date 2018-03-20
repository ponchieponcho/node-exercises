var http = require('http');
var lastId = 0;


const readline = require('readline');
const fs = require('fs');
var pbFileName = 'myjsonfile.json';
var phoneBook = [];
var tempPhoneBook = [];


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var getContacts = function(){
    fs.readFile(pbFileName, function (err, data) {
        var json = JSON.parse(data);
        phoneBook = json;
    })
}

var menu = (`
=====================
Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Save entries
6. Restore saved entries
7. Quit`);


var server = http.createServer(function (request, response) {
    // console.log(request.method, request.url)

    if (request.method === "GET") {
        response.end(JSON.stringify(contacts))
    } else if (request.method === "POST") {
        var body = '';
        request.on('data', function (chunk) {
            console.log(chunk)
        })

    } else if (request.method === "PUT") {
        console.log('Put')
    } else if (request.method === "DELETE") {
        console.log('Delete')
    }
    response.end()
})



var mainMenu = function () {
    console.log(menu)
    // console.log(phoneBook)

    rl.question('What do you want to do (1-7)? ', function (answer) {
        if (answer === '1') { //working
            rl.question('Name: ', function (name) {
                for (var i = 0; i < phoneBook.length; i++) {
                    if (phoneBook[i].firstName === name) {
                        console.log('Found entry for ' + name + ': ' + phoneBook[i].phoneNumber);
                        mainMenu()
                    }
                }
            })
        }

        else if (answer === '2') {
            rl.question('Name: ', function (name) {
                rl.question('Phone Number: ', function (phone) {
                    phoneBook.push({ 'firstName': name, 'phoneNumber': phone });
                    console.log('Entry stored for ' + name);
                    mainMenu()
                });
            })
        }

        else if (answer === '3') { //Delete an entry
            console.log('working')

        } else if (answer === '4') { //List all entries
            for (var i = 0; i < phoneBook.length; i++) {
                console.log('Found entry for ' + phoneBook[i].firstName + ': ' + phoneBook[i].phoneNumber)
            }
            mainMenu()
        } else if (answer === '5') { //Save entries
            fs.writeFile(pbFileName, JSON.stringify(phoneBook), function (err) {
                if (err) throw err;
                console.log('Entries saved to ' + pbFileName)
                mainMenu();
            })

        } else if (answer === '6') { //Restore saved entries
            fs.readFile(pbFileName, function (err, data) {
                var json = JSON.parse(data);
                phoneBook = json;
                mainMenu();
            })

        } else if (answer === '7') { //Quit
            console.log('Bye!')
            rl.close();
        }

    });
}

server.listen(5000)

// mainMenu();
