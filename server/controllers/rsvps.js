const Rsvp = require('mongoose').model('Rsvp');

module.exports = {
    index(req, res){
        Rsvp.find({}).populate('player', 'name')
        .then(rsvps => res.json(rsvps))
        .catch(console.log)
    },
    create(req, res){
        Rsvp.create(req.body)
        .then(rsvp => res.json(rsvp))
        .catch(console.log)
    },
    update(req, res){
        Rsvp.findByIdAndUpdate(req.body.id, {
            $set: {
                game: req.body.game,
                player: req.body.player,
                status: req.body.status
            }
        })
        .then(rsvp => res.json(rsvp))
        .catch(console.log)
    }
}