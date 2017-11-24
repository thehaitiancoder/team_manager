const playerController = require('../controllers/players');
const gameController = require('../controllers/games');
const rsvpController = require('../controllers/rsvps');
const path = require('path');

module.exports = function(app){
    console.log('hits the main routes')
    app.get('/api/players', playerController.index);
    app.get('/api/players/:id', playerController.showOne);
    app.post('/api/players', playerController.create);
    app.delete('/api/players/:id', playerController.destroy);

    app.get('/api/games', gameController.index);
    app.post('/api/games', gameController.create);
    app.delete('/api/games', gameController.destroy);

    app.get('/api/rsvps', rsvpController.index);
    app.post('/api/rsvps', rsvpController.create);
    app.put('/api/rsvps', rsvpController.update);


    app.all('*', function(req, res){
        res.sendFile(path.resolve('dist', 'index.html'))
    })

}