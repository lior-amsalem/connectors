/**
 * @module lib/Redis
 * @since 1.0.0
 */

const amqp = require('amqplib');
const Connector = require('../connector');

/**
 * Rabbitqm Connector
 * @example
 * const Mongoose = Rabbitqm.sendToQueue(QUEUE_NAME, new Buffer('something..'));
 */
class Rabbitqm extends Connector {

    /**
     * expose rabbitqm package module
     * @return {object} original package instance object.
     */
    get rabbitqm() {
        return rabbitqm;
    }

    /**
     * Connector name of rabbitqm
     * @return {string} name of current connector.
     */
    get connector_name() {
        return 'rabbitqm';
    }

    /**
     * connect handling for rabbitqm, wrap the event emmiter 
     * @return {object} instance of rabbitqm connection.
     */
    connect() {
        const open = amqp.connect(`amqp://${this.host}:${this.port}`);

        this._instance = new Promise((resolve, reject) => {
            open.then((conn) => {
                return conn.createChannel();
            }).then((channel) => {
                return channel.assertQueue(this.queue_name).then((ok) => {
                    resolve(channel); // e.g x.sendToQueue(q, new Buffer('something to do'))
                });
            }).catch((err) => {
                reject(err)
            });
        });

        return this._instance;
    }

    /**
     * Disconnect handling for mysql
     */
    disconnect() {
        this._instance.quit();
    }
}

module.exports = Rabbitqm;