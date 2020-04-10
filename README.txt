db.quizzes.insert({title: "Quiz 1"})
db.quizzes.insert({title: "Quiz 2"})
db.quizzes.insert({title: "Quiz 3"})

db.questions.quizId=db.quizzes.aggregate([{$lookup:{from: 'questions',localField: 'quizId',foreignField: '_id', as: 'questions'}}]).toArray(function(err, res) {if (err) throw err;console.log(JSON.stringify(res));db.close();})

db.quizzes.aggregate([
                     { $lookup:
                             {
                                 from: 'questions',
                                 localField: '_id',
                                 foreignField: 'quizId',
                                 as: 'questions'
                             }
                     }
                 ]).toArray(function(err, res) {
                     if (err) throw err;
                     console.log(JSON.stringify(res));
                     db.save();
                     db.close();
                 });
2 2 2 3 3 1
db.questions.insert({title: "JPA True False", question:"JPA stands for Java Persistence API", correct: "true", type: "TRUE_FALSE"})
db.questions.insert({title: "JPA Multiple Choice", question:"What does JPA stand for?", correct: "Java Persistence API",type: "MULTIPLE_CHOICE", choices:["Java Pseudo API", "Java Persistence API", "JSON Persistence API","JavaScript Persistence API"]})
db.questions.insert({title: "JSON True False", question:"JSON stands for Java Object Notation", correct: "false",type: "TRUE_FALSE"})
db.questions.insert({title: "JSON Multiple Choice", question:"What does JSON stand for?", correct: "JavaScript Object Notation",type: "MULTIPLE_CHOICE", choices: ["JavaScript Object Notation","JavaScript Object Normalization", "Java Object Normalization", "Java Object Notation"]})
db.questions.insert({title: "CSS True False", question:"CSS stands for Cascading Style Sheet", correct: "true", type: "TRUE_FALSE"},{_id: "678", title: "CSS Multiple Choice", quizId: "123", question:"What does CSS stand for?", correct: "Cascading Style Sheet", type:"MULTIPLE_CHOICE", choices: ["Class Style Sheet", "Cascading Screen Style","Cascading Style Sheet", "Cascading Style Screen"]})
db.questions.insert({title: "CSS Multiple Choice", question:"What does CSS stand for?", correct: "Cascading Style Sheet", type:"MULTIPLE_CHOICE", choices: ["Class Style Sheet", "Cascading Screen Style", "Cascading Style Sheet", "Cascading Style Screen"]})

db.quizzes.update({_id: ObjectId("5e8d6a9a107d4c9f911e1ec7")}, {$push:{questions:'5e8d7076e8ef6e5c694aa2e8'}})
