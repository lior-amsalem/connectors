const mongoose = require('mongoose');
const Connectors = require('./connectors');

/**
 * Mongoose Connector
 */
class Mongoose extends Connectors {

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