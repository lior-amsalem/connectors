/**
 * @module lib/Mongoose
 * @since 1.0.0
 */

const mongoose = require('mongoose');
const Connector = require('../connector');

/**
 * Mongoose Connector
 * @example
 * const Mongoose = Mongoose({ // mongoose connection object });
 */
class Mongoose extends Connector {

    /**
     * expose mongoose package module
     * @return {object} original package instance object.
     */
    get mongoose() {
        return mongoose;
    }

    /**
     * Connector name of mongoose
     * @return {string} name of current connector.
     */
    get connector_name() {
        return 'mongoose';
    }

    /**
     * connect handling for mongoose
     * @return {object} instance of mongoose connection.
     */
    connect() {
        this._instance = mongoose.connect('mongodb://' + this.host + ':' + this.port + '/' + this.db_name, {useMongoClient: true});

        this._instance.then(() => {
            super.connect();
        });

        return this._instance;
    }

    /**
     * Disconnect handling for mongoose
     */
    disconnect() {
        this._instance.disconnect();
    }
}

module.exports = Mongoose;