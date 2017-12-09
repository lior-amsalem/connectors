/**
 * @module lib/Redis
 * @since 1.0.0
 */

const redis = require('redis');
const Connector = require('../connector');

/**
 * Redis Connector
 * @example
 * const Mongoose = Redis({ // redis connection object });
 */
class Redis extends Connector {

    /**
     * expose redis package module
     * @return {object} original package instance object.
     */
    get redis() {
        return redis;
    }

    /**
     * Connector name of redis
     * @return {string} name of current connector.
     */
    get connector_name() {
        return 'redis';
    }

    /**
     * connect handling for redis, wrap the event emmiter 
     * @return {object} instance of redis connection.
     */
    connect() {
        this._instance = new Promise((resolve, reject) => {
            const redisInstance = redis.createClient({
                port: this.port,
                host: this.host
            });

            redisInstance.on('connect', () => {
                resolve(redisInstance);
                super.connect();
            });

            redisInstance.on('error', (err) => {
                reject(err);
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

module.exports = Redis;