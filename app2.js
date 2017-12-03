// const express = require('express');
const path = require('path');
const fs = require('fs');

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

let foundPosition = function(father, level){
    if(level--){
        return foundPosition(father.children[(father.children.length-1)], level);
    }
    return father;
};
fs.readFile('data.txt', 'utf-8', (err, data) => {
    console.log(data);
    data = data.replace(/[\r]/g, '');
    let array = data.split('\n');

    let result = {
        name: 'root',
        children: []
    };

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        let level = getLevel(item);
        item = item.slice(level);
        console.log(level);

        let root = foundPosition(result, level);

        let itemArray = item.split(',');
        console.log(itemArray);

        for (let j = 0; j < itemArray.length; j++) {
            let item = itemArray[j];
            let tem = {
                name: item,
                children: []
            };
            let fa = foundPosition(root, j);
            console.log(fa);
            fa['children'].push(tem);
            console.log(result);
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
