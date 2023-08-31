var express = require('express');
var router = express.Router();
const passport = require('passport');
const Cue = require('../models/cue');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const cues = await Cue.find({});
  res.render('index', { cues });
}); 

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: "select_account"
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
