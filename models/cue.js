const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bitSchema = new Schema({
    bitContent: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const cueSchema = new Schema ({
    title: String,
    tone: {
        type: String,
        enum: ['creative', 'comedic', 'memoir']
    },
    cueContent: {
        type: String,
        required: true
    },
    bits: [bitSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Cue', cueSchema);