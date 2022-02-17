const express = require('express');
const controller = require('./controller');
var router = express.Router();

// home page.
router.get('/', function (req, res) {
    res.render('index');
});

// contact page.
router.get('/contact', function (req, res) {
    res.render('contact');
});

// project page.
router.get('/project', function (req, res) {
    controller.renderProject(req, res);
});

// project page.
router.get('/content/projects', function (req, res) {
    controller.sendAllProjects(req, res);
});

// 404 error page
router.get('*', function (req, res) {
    res.status(404);
    res.render('error/404');
});

// mailer API
router.post('/contact/sendmail', function (req, res) {
    controller.sendMail(req, res);
});

module.exports = router;