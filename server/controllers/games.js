const Game = require('mongoose').model('Game');

module.exports = {
    index(req, res){
        Game.find({})
        .then(game => {res.json(game)})
        .catch(console.log)
    },

    create(req, res){
        console.log(req.body);
        Game.create(req.body)
        .then(game => res.json(game))
        .catch(console.log)
    },

    destroy(req, res){
        Player.findByIdAndRemove(req.params.id)
        .then(game => res.json(game))
    }
}