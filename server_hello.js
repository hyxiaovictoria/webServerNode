var express = require('express');
var app = express();
app.get('/hello', function(req, res){
    res.send('hello world');
});
app.get('/', function(req, res){
    res.send('Welcome to server_hello.js!!!');
});
app.listen(3000);
