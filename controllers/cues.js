const Cue = require('../models/cue');
//const Cues = require('../models/cue');

module.exports = {
    index,
    show,
    new: newCue,
    create
};

async function index(req, res) {
    const cues = await Cue.find({});
    res.render('cues/index', { cues });
}

async function show(req, res) {
  const cue = await Cue.findById(req.params.id);
  res.render('cues/show');
}

async function newCue(req, res) {
    res.render('cues/new', {errorMsg: '' });
}

async function create(req, res) {
    console.log(req.body);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      try {
        const cue = await Cue.create(req.body);
        res.redirect(`/cues/${cue._id}`);
      } catch (err) {
        console.log(err);
        res.render('cues/new', { errorMsg: err.message });
      }
}