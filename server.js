const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(__dirname));


let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});