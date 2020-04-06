const questionsDao = require('../daos/questions.dao.server')

findAllQuestions = () => questionsDao.findAllQuestions()

findQuestionById = (qid) =>
    questionsDao.findQuestionById(qid)

findQuestionsForQuiz = (qzid) =>
    questionsDao.findQuestionsForQuiz(qzid)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}
