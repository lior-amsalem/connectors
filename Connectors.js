const fs = require('fs');

class Connectors {
    constructor(settings) {
        console.log('[Connectors] constructor')
        this.settings = settings;

        this.status = false;
    }

    get port() {
        return this.settings.port;
    }

    get host() {
        return this.settings.host;
    }

    get db_name() {
        return this.settings.db_name;
    }

    get connector_name() {
        return '';
    }

    get is_connected() {
        return this.status;
    }

    connect() {
        console.log('[SYSTEM] Connected to ' + this.connector_name + ' successfully!');

        this.status = true;
    }

    disconnect() {
        console.log('[SYSTEM] ' + this.connector_name + ' disconnect!')
    }
}

module.exports = Connectors;