const mongoose = require('mongoose');
const { Schema } = mongoose;

const RsvpSchema = new Schema({    
    game: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    },
    player: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    status: {
        type: Number,
        required: [true, 'Rsvp is required!'],
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model('Rsvp', RsvpSchema);