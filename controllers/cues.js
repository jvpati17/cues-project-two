const Cue = require('../models/cue');


module.exports = {
    index,
    show,
    new: newCue,
    delete: deleteCue,
    create,
    edit,
    update
};



async function index(req, res) {
    const userId = req.user._id; 
    const cues = await Cue.find({});
    res.render('cues/index', { cues, userId }); 
}

async function show(req, res) {
  const cue = await Cue.findById(req.params.id);
  res.render('cues/show', { cue });
}

async function newCue(req, res) {
    res.render('cues/new', {errorMsg: '' });
}

async function deleteCue(req, res, next) {
 Cue.findOne({
  'cues._id': req.params.id,
  'cues.user': req.user._id
 }).then(function(cue) {
  if (!cue) return res.redirect('/cues');
  cue.cues.remove(req.params.id);
  then(function() {
    res.redirect(`/cues`);
  }).catch(function(err) {
    return next(err);
  });

 });
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

async function edit(req, res) {
  const cue = await Cue.findById(req.params.id);
  res.render('cues/edit', {errorMsg: '', cue });

}

async function update(req, res) {
  const cue = req.params.id;
  const newCueData = req.body;
  try {
    const newCue = await Cue.findByIdAndUpdate(cue, newCueData, {new: true});
  } catch (err) {
    console.log(err);
    res.render('cues/edit', { errorMsg: err.message });
  }
}