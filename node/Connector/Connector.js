/**
 * @module lib/connector
 * @since 1.0.0
 */
const fs = require('fs');

class Connector {
    /**
     * Base class constructor that accepts predefined settings with all db connections
     * @param  {array} settings pre-defined database connections array
     *
     * @example
     * class NewConnector extends Connector {
     *     Connect() { //.. }
     *     Disconnect() { //.. }
     * }
     */
    constructor(settings) {
        this.settings = settings;

        this.status = false;
    }

    /**
     * Port of connector from the provided settings.
     * @readOnly
     * @return {string} the port string.
     */
    get port() {
        return this.settings.port;
    }

    /**
     * Host of the connector from the provided settings.
     * @readOnly
     * @return {string} host from the settings.
     */
    get host() {
        return this.settings.host;
    }

    /**
     * Database name.
     * @readOnly
     * @return {string} returns the data base name.
     */
    get db_name() {
        return this.settings.db_name;
    }

    /**
     * username.
     * @readOnly
     * @return {string} returns the username.
     */
    get username() {
        return this.settings.username;
    }

    /**
     * Connector name, method will be override by each connector with their name.
     * @readOnly
     * @return {string} connector name.
     */
    get connector_name() {
        return '';
    }

    /**
     * Status of the connector - default is false
     * @return {Boolean|false} returns the status of the connector.
     */
    get is_connected() {
        return this.status;
    }

    /**
     * Base method for all connectors with base behaviour like settings status or logging the status.
     */
    connect() {
        console.log('[SYSTEM] Connected to ' + this.connector_name + ' successfully!');

        this.status = true;
    }

    /**
     * Base intereface for all connectors with base behaviour.
     */
    disconnect() {
        console.log('[SYSTEM] ' + this.connector_name + ' disconnect!')
    }
}

module.exports = Connector;