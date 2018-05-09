var express = require('express');
var router = express.Router();

const quizCtrl = require("../controllers/quiz");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Página principal' });
});

router.get('/quizzes', quizCtrl.index);

router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Créditos' });
});

module.exports = router;
