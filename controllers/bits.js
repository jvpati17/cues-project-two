const Cue = require('../models/cue');

module.exports = {
    create,
    delete: deleteBit
};

async function create(req, res) {
    const cue = await Cue.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    cue.bits.push(req.body);
    try {
        await cue.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/cues/${cue._id}`);
}

async function deleteBit(req, res) {
    const cue  = await Cue.findOne({ 'bits._id': req.params.id, 'bits.user': req.user._id });
    if (!cue) return res.redirect('/cues');
    cue.bits.remove(req.params.id);
    await cue.save();
    res.redirect(`/cues/${cue._id}`);
}

