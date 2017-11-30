const initialize = require('./Initialize');


module.exports = {
    init: (dbConfig) => initialize.init(dbConfig),
    mongoose: require('mongoose'),
    mysql: require('mysql')
};