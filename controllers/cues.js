const Cue = require('../models/cue');
//const Cues = require('../models/cue');



module.exports = {
    index,
    new: newCue,
    create
};

async function index(req, res) {
    const cues = await Cue.find({});
    res.render('/index', { cues });
};

async function newCue(req, res) {
    res.render('/index', {errorMsg: '' });
};

async function create(req, res) {
    console.log(req.body);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    try {    
        await Cue.create(req.body);
        res.redirect(`/index/${req.params.id}`);
    } catch(err) {
        console.log(err)
        res.redirect('/')
    }
};