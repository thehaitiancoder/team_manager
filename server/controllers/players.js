const Player = require('mongoose').model('Player');

module.exports = {
    index(req, res){
        Player.find({})
        .then(players => {res.json(players)})
        .catch(console.log)
    },

    create(req, res){
        console.log(req.body);
        Player.create(req.body)
        .then(player => res.json(player))
        .catch(console.log)
    },

    destroy(req, res){
        Player.findByIdAndRemove(req.params.id)
        .then(player => res.json(player))
    },

    showOne(req, res){
        Player.findById(req.params.id)
        .then(onePlayer => res.json(onePlayer))
        .catch(console.log)
    }
}