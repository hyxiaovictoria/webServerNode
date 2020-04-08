const quizzesModel = require('../models/quizzes/quizzes.models.server')

const findAllQuizzes = () =>
    quizzesModel.find()
        // .then(a => console.log(JSON.stringify(a)))

const findQuizById = (quizId) => quizzesModel.findById(quizId)
module.exports = { findAllQuizzes, findQuizById }
