var express = require('express');
var router = express.Router();
const cuesCtrl = require('../controllers/cues');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.render('/cues'); 
}); */


router.get('/', cuesCtrl.index);
router.get('/new', cuesCtrl.new);
router.get('/:id', cuesCtrl.show);
router.post('/', cuesCtrl.create);



module.exports = router;
