const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Player name cannot empty!'],
        trim: true,
        minlength: [2, 'The minimum length for the name is 2 characters!']
    },
    pref_position: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('Player', PlayerSchema);