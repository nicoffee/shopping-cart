const express = require('express');
const app = express();

console.log('Hello world!');

app.use('/public', express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    console.log('***GET***');
    res.sendFile(__dirname + '/index.html');
});