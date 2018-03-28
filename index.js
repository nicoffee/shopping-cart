const express = require('express');
const app = express();
const path = require('path');

console.log('Hello world!');
console.log('__dirname',  __dirname);
console.log('path.join', path.join(__dirname + "/public/index.html"));


// app.use('/public', express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    console.log('***GET***');
    res.sendFile('./index.html');
});