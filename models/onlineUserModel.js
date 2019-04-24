var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: String,
    thumbnail: String,
    online: Boolean
});

var users = mongoose.model('Users', usersSchema);

module.exports = users;
