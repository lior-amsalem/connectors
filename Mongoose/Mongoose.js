const mongoose = require('mongoose');
const Connector = require('../connector');

/**
 * Mongoose Connector
 */
class Mongoose extends Connector {

    get mongoose() {
        return mongoose;
    }

    get connector_name() {
        return 'mongoose';
    }

    connect() {
        this._instance = mongoose.connect('mongodb://' + this.host + ':' + this.port + '/' + this.db_name, {useMongoClient: true});

        this._instance.then(() => {
            super.connect();
        });

        return this._instance;
    }

    disconnect() {
        this._instance.disconnect();
    }
}

module.exports = Mongoose;