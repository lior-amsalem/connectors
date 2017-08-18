const init = require('./initialize');

const mockConfig = [
    {
        connector_name: 'mongoose',
        host: '127.0.0.1',
        port: '27017',
        db_name: 'phoenix_test'
    },
    {
        connector_name: 'mysql',
        host: 'localhost',
        port: '',
        db_name: ''
    }
];

const connector = init.initlize(mockConfig);

describe('Test Initialize setup', () => {
    it('Should save Settings to the context of connector', () => {
        expect(connector.settings).to.be.equal(mockConfig);
    });

    describe('Test Mongoose Object', () => {
        it('Should have a connect method type function', () => {
            const typeOfConnect = typeof connector.mongoose.connect;
            expect(typeof connector.mongoose.connect).to.be.equal('function');
        });

        it('Should return have connector name of mongoose', () => {
            expect(connector.mongoose.connector_name).to.be.equal('mongoose');
        })
    });
});