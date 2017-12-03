// const express = require('express');
const path = require('path');
const fs = require('fs');
// const history = require('connect-history-api-fallback');
// const app = express();

// let server = app.listen(80, function () {
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log('Example app listening at http://%s:%s', host, port);
// });

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '/frontend/dist/index-gulp.html'));
// });
//
// app.get('/gulp', function (req, res) {
//     res.sendFile(path.join(__dirname, '/frontend/dist/index-gulp.html'));
// });
//
// app.get('/test', function (req, res) {
//     res.sendFile(path.join(__dirname, '/frontend/src/index-gulp.html'));
// });

let getLevel = function(root, num){
    if(num !== 0){
        return root[root.length];
    }
};

fs.readFile('test.txt', 'utf-8', (err, data) => {
    // => [Error: EISDIR: illegal operation on a directory, read <directory>]
    console.log(data);
    data = data.replace(/[\r]/g, '');
    let array = data.split('\n');
    let result = [];
    let myPointer = result;
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        let count = 0;
        while (count < item.length) {
            if (item[count] === '，') {
                count++;
            }
            else {
                break;
            }
        }
        if (count === 0) {
            let itemArray = item.split('，');
            console.log(itemArray);
            // result = {
            // };
            let before = [];
            for (let j = 0; j < itemArray.length; j++) {
                console.log(j);
                let tem = {};
                tem[itemArray[j]]=[];
                before.push(tem);
                before=tem[itemArray[j]];
                console.log(tem);
                console.log(before);
                // myPointer.push(tem);
                // myPointer = tem;
            }
            // result[itemArray[0]] = [];
        }
    }
    console.log('Result: ');
    console.log(result);
    fs.writeFile('result.json', JSON.stringify(result), 'utf-8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    console.log(array);
});
// console.log('App begin....');
