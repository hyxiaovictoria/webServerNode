const express = require('express')
const app = express()

const quizzesController = require('./controllers/quizzes.controller.server')
quizzesController(app)

app.listen(3000)
