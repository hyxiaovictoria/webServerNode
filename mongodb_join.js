var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("whiteboard-cs5610-sp20", {useNewUrlParser: true, useUnifiedTopology: true});
    dbo.collection('quizzes').aggregate([
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
        db.close();
    });
});

// orders -> questions
// products -> quizzes
// product_id -> quizId
// orderdetails -> questions
