const express = require('express');
const router = express.Router();
const bitsCtrl = require('../controllers/bits');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/cues/:id/bits', ensureLoggedIn, bitsCtrl.create);
router.delete('/bits/:id', ensureLoggedIn, bitsCtrl.delete);






module.exports = router;