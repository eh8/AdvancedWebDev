'use strict';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });

    app.get('/about', function(req, res) {
        res.render('pages/about');
    });

    app.get('/overthrowkaran', function(req, res) {
        res.render('pages/overthrowkaran');
    });
};