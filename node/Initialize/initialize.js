/**
 * @module lib/initialize
 * @since 1.0.0
 */

const helpers = require('./helpers');

/**
 * database object with all possible connector classes.
 * @type {Object}
 * @example
 * const initialize = require('connector/initialize');
 * const connector = initialize.init(settings);
 */
const db = {
    Mongoose: require('../Mongoose'),
    Mysql: require('../Mysql')
};

/**
 * Global object that contain all our db connections
 */
global.db = {};

const initialize = {
    connectors_counter: 0,
    settings: {},
    errors: [],
    init(settings) {
        this.settings = settings;

        this.loadDB();

        return this;
    },
    loadDB() {
        this.settings.map(this.mapDbConfig);

        setTimeout(() => console.log('[INFO] total connections: ', initialize.connectors_counter), 1500);
    },
    mapDbConfig(dbConfig, index) {
        const connectorCapitlizedName = helpers.capitalize(dbConfig.connector_name),
            isConnectorExists = typeof db[connectorCapitlizedName] === 'function';

        if(isConnectorExists) {
            this[dbConfig.connector_name] = new db[connectorCapitlizedName](dbConfig);

            const instance = this[dbConfig.connector_name].connect();

            instance.then((dbInstance) => {

                // make the db instance available globally
                global.db[dbConfig.connector_name] = dbInstance;

                initialize.connectors_counter++;
            }).catch(reason => {
                console.log(`[ERROR] [INITIALIZE] [PROMISE] ${reason}`);
            });
        } else {
            const err = `[ERROR] [INITIALIZE] ${connectorCapitlizedName} connector name not found. could be a typo or not a supported connector.`;
            console.log(err);
            this.errors.push(err);
        }
    }
};

module.exports = initialize;