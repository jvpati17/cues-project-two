var express = require('express');
var router = express.Router();
const passport = require('passport');
const cuesCtrl = require('../controllers/cues');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cues' });
}); 

router.post('/', cuesCtrl.create);
router.get('/', cuesCtrl.index); 
router.get('/', cuesCtrl.new); 

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
