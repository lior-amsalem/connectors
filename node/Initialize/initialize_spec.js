const initialize = require('./initialize');
const Mockgoose = require('mockgoose').Mockgoose;

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

const connector = initialize.init(mockConfig);
const mockgoose = new Mockgoose(connector.mongoose.mongoose);

describe('Test Initialize setup', () => {
    it('Should save Settings to the context of connector', () => {
        expect(connector.settings).to.be.equal(mockConfig);
    });

    it('Should have connectors_counter 1 base on configuration', () =>{
        expect(connector.connectors_counter).to.be.equal(1);
    });

    it('Should have 1 error in array', () => {
        expect(connector.errors.length).to.be.equal(1);
    });

    describe('Test Mongoose Object', () => {
        it('Should have a connect method type function', () => {
            const typeOfConnect = typeof connector.mongoose.connect;
            expect(typeof connector.mongoose.connect).to.be.equal('function');
        });

        it('Should return have connector name of mongoose', () => {
            expect(connector.mongoose.connector_name).to.be.equal('mongoose');
        });

        xit('should not be connected base on pre-configuration', () => {
            expect(connector.mongoose.is_connected).to.be.equal(false);
        });

        it('Should be connected to mongodb', (done) => {
            mockgoose.prepareStorage().then((a,b) => {

                const instance = connector.mongoose.connect();

                instance.then(() => {
                    expect(connector.mongoose.is_connected).to.be.equal(true);
                    done();
                });
            });
        });

        it('Should have mongoose package on global object', () => {
            expect(global.mongoose).to.exist;
        });
    });
});