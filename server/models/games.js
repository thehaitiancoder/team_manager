const mongoose = require('mongoose');
const { Schema } = mongoose;

const GameSchema = new Schema({
    game: {
        type: Number,
        required: [true, 'Game cannot be empty!']
    }
}, {timestamps: true});

module.exports = mongoose.model('Game', GameSchema);