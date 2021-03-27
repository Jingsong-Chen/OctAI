const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
    serial_number: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    content: {
        type: Buffer,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Music = mongoose.model('music', MusicSchema);