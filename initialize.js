const db = {
    Mongoose: require('./Mongoose')
}

const helpers = {
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

const initialize = {
    settings: {},
    initlize(settings) {
        console.log('constructor')

        this.settings = settings;

        if(!settings) {
            this.loadSettings();
        }

        this.loadDB();

        return this;
    },
    loadDB() {
        console.log('loadDB')
        this.settings.map((dbConfig, index) => {
            this[dbConfig.connector_name] = new db['Mongoose'](dbConfig);//db[helpers.capitalize(db.connector_name)](db);
        });

        console.log('mongoose?' , this.mongoose.connect);
    },
    loadSettings() {
        const settingsPromise = new promise((resolve, reject) => {
            fs.readFile('./config/database.js', 'utf-8', (err, content) => {
                if (err) {
                    reject(err);
                    log(err);
                }

                resolve(content)
            });
        });
    }
};

module.exports = initialize;