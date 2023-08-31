var express = require('express');
var router = express.Router();
const cuesCtrl = require('../controllers/cues');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', ensureLoggedIn, cuesCtrl.index);
router.get('/new', ensureLoggedIn, cuesCtrl.new);
router.get('/:id', ensureLoggedIn, cuesCtrl.show);
router.put('/:id', ensureLoggedIn, cuesCtrl.update);
router.get('/:id/edit', ensureLoggedIn, cuesCtrl.edit)
router.post('/', ensureLoggedIn, cuesCtrl.create);
router.delete('/:id', ensureLoggedIn, cuesCtrl.delete);



module.exports = router;
