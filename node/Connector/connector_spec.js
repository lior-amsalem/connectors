const Connector = require('./');

const settings = {
    connector_name: 'mysql',
    host: 'localhost',
    port: '321',
    db_name: ''
};

const connector = new Connector(settings);
console.log('connector> : ' , connector.port)
describe('Test Connector', () => {
    it('Should set settings correctly', () =>{
        expect(connector.settings).to.be.equal(settings);
    });

    it('Should return correct port', () => {
        expect(connector.port).to.be.equal(settings.port);
    });

    it('Should return correct host', () => {
        expect(connector.host).to.be.equal(settings.host);
    });

    it('Should return correct db_name', () => {
        expect(connector.db_name).to.be.equal(settings.db_name);
    });

    it('Should return empty connector_name', () => {
        expect(connector.connector_name).to.be.equal('');
    });

    it('Should return is connect false', () => {
        expect(connector.is_connected).to.be.equal(false);
    });
});