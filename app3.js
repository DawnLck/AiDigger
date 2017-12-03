const fs = require('fs');

let list = [];

/* Get the level of the node */
let getLevel = function (str) {
    let count = 0;
    while (count < str.length) {
        if (str[count] === ',') {
            count++;
        }
        else {
            break;
        }
    }
    return count;
};

/* Get the location of the father node */
let foundPosition = function (father, level, count) {
    if (count--) {
        // console.log('Father.length: ' + father.length);
        return foundPosition(father[father.length - 1][list[level - count - 1]], level, count);
    }
    return father;
};

/* Convert String data to JSON format */
function str2json(str) {
    str = str.replace(/[\r]/g, '');
    let array = str.split('\n');
    let result = [];

    for (let i = 0; i < array.length; i++) {

        let item = array[i];
        let level = getLevel(item);
        item = item.slice(level);
        let itemArray = item.split(',');

        // console.log('>>>>>>>>>>>>>');
        // console.log(level);
        // console.log(item);
        // console.log(itemArray);

        for (let j = 0; j < itemArray.length; j++) {

            let node = itemArray[j];
            let tem = {};
            tem[node] = [];
            let fa = foundPosition(result, j + level, j + level);
            fa.push(tem);
            list[level + j] = node;

            // console.log('-------------');
            // console.log(node);
            // console.log('Fa: ');
            // console.log(fa);
            // console.log(list);
        }
    }
    // console.log('Result: ');
    // console.log(result);
    return result;
}

/* Read the origin data from file, and write the result into result.json */
fs.readFile('data.txt', 'utf-8', (err, data) => {
    // console.log(data);

    fs.writeFile('result.json', JSON.stringify(str2json(data)), 'utf-8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

});
