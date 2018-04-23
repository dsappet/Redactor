// app/routes.js
const fs = require('fs');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // route to handle get goes here (app.get)
    app.get('/api/:version/lorem', function(req,res){
        // I get version in the params here just for convention, I'm not bothering version checking for this
        const version = req.params.version;
        const filename = './server/files/lorem.txt'; // Could also just require this, but lets use fs for fun
        fs.readFile(filename, 'utf8', function(err,data){
            if(err) throw err;
            res.send(data);
        })
    });
    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};