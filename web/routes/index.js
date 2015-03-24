var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', isAuthenticated: req.isAuthenticated(), user: req.user });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.post('/login', passport.authenticate('local'), function(req, res, next) {
  res.redirect('/');
});





module.exports = router;
