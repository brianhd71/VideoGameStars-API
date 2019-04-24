var users = require('../models/onlineUserModel');

module.exports = function(app) {

   app.get('/api/setupUsers', function(req, res) {

       // seed database
       var starterUsers = [
        { username: "Mario" ,
          thumbnail: "http://nerdculturepodcast.com/wp-content/uploads/2013/07/20120211175605Mario_and_Star_MP9.png"
        },
        { username:"Donkey Kong",
          thumbnail: "http://maxlevel.org/wp-content/uploads/2014/02/Donkey-Kong.png"
        },
        { username:"Pac-Man" ,
          thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Prick%C3%A4tarpucken.svg/1024px-Prick%C3%A4tarpucken.svg.png"
        },
        { username:"Zelda" ,
          thumbnail: "http://assets.vg247.com/current/2014/07/hyrule_warriors_princess_zelda.jpg"
        }
       ];
       // users.create(starterUsers, function(err, results) {
       //     res.send(results);
       // });
   });

}
//json/generator.com to get fake data
