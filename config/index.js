var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
        '@ds135252.mlab.com:35252/online-users';
    }
}
