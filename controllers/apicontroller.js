var Users = require('../models/onlineUserModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/users', function(req, res) {
        Users.find({}).then(function (users) {
          res.send(users);
       });
    });

    app.get('/api/user/:uname', function(req, res) {

        Users.find({ username: req.params.uname },
            function(err, Users) {
                if (err) throw err;

                res.send(Users);
            });

    });

     app.get('/api/user/:id', function(req, res) {
       Users.findById({ _id: req.params.id }, function(err, User) {
           if (err) throw err;

           res.send(User);
       });

    });

    app.post('/api/user', function(req, res) {
        var newUser = Users({
            username: req.body.username,
            thumbnail:  req.body.thumbnail
        });
        newUser.save(function(err) {
            if (err) throw err;

            res.send('Success');
        });
    });

    app.put('/api/user', function(req, res) {
        if (req.body.id) {
            Users.findByIdAndUpdate(req.body.id, {
                username: req.body.username,
                thumbnail: req.body.thumbnail
            }, function(err, User) {
                if (err) throw err;

                res.send('Success');
            });
        }
    });

    app.delete('/api/user', function(req, res){

        Users.findByIdAndDelete(req.body.id, function(err) {
            if (err) throw err;

            res.send('Success');
        });

    });
}
