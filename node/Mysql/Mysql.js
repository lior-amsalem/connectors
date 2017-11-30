/**
 * @module lib/Mysql
 * @since 1.0.0
 */

const mysql = require('mysql');
const Connector = require('../connector');

/**
 * Mysql Connector
 * @example
 * const Mongoose = Mysql({ // mysql connection object });
 */
class Mysql extends Connector {

    /**
     * expose mysql package module
     * @return {object} original package instance object.
     */
    get mysql() {
        return mysql;
    }

    /**
     * Connector name of mysql
     * @return {string} name of current connector.
     */
    get connector_name() {
        return 'mysql';
    }

    /**
     * connect handling for mysql
     * @return {object} instance of mysql connection.
     */
    connect() {
        this._instance = mysql.createConnection({
            host: this.host,
            user: 'root',
            password: this.password,
            database: this.db_name
        });

        this._instance.connect((err) => {
            if(err) {
                console.log(`[ERROR] [CONNECTORS] ${err}`);
                return;
            }

            super.connect();
        });

        return this._instance;
    }

    /**
     * Disconnect handling for mysql
     */
    disconnect() {
        this._instance.end();
    }
}

module.exports = Mysql;