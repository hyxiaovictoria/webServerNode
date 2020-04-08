const mongoose = require('mongoose')

const quizzesSchema = mongoose.Schema({
    title: String,
    score: Number,
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionsModel'
    }]
}, {collection: 'quizzes'})
module.exports = quizzesSchema
