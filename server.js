const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/whiteboard-cs5610-sp20',
mongoose.connect('mongodb+srv://cs5610_xiaohai:cs5610_xiaohai@cluster0-7jjzs.mongodb.net/whiteboard-cs5610-sp20',
    {useNewUrlParser: true, useUnifiedTopology: true } )

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)
require('./controllers/users.controller.server')(app)

app.get('/hello', (req, res) => res.send('hello world!'))
app.get('/', (req, res) => res.send('Welcome to wbdv-sp20-xiaohai-server-node'))

app.listen(process.env.PORT||3000)
