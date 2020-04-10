var express = require('express');
var path = require('path')
var app = express();

app.use(express.static(__dirname + '/dist/wbdv-sp20-xiaohai-server-node'));

app.get('/hello', function(req, res){
    res.send('hello world');
});
app.get('/', function(req, res){
    res.send('Welcome to server_hello.js!!!');
});
app.listen(process.env.PORT||8080);
