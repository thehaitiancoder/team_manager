const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');

mongoose.connect('mongodb://localhost/team_management');
mongoose.connection.on('connected', () => console.log("We are connected to Mongdb"));

mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(file => {
    if(reg.test(file)){
        require(path.join(modelsPath, file));
    }
})