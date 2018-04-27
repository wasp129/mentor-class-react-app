//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Article = require('../../models/Article');

router.get('/', function(req, res) {
    res.render('index')
});

router.route('/insert')
    .post(function(req, res) {
        var article = new Article();
        article.title = req.body.title;
        article.content = req.body.content;
        article.category = req.body.category;

        article.save(function(err) {
            if (err)
                res.send(err);
            res.send('Article successfully added!');
        });
    })

// router.route('/update')
//     .post(function(req, res) {
//         const doc = {
//             description: req.body.description,
//             amount: req.body.amount,
//             month: req.body.month,
//             year: req.body.year
//         };
//         console.log(doc);
//         Expense.update({ _id: req.body._id }, doc, function(err, result) {
//             if (err)
//                 res.send(err);
//             res.send('Expense successfully updated!');
//         });
//     });

router.get('/delete', function(req, res) {
    var id = req.query.id;
    Article.find({ _id: id }).remove().exec(function(err, article) {
        if (err)
            res.send(err)
        res.send('Article successfully deleted!');
    })
});

module.exports = router;