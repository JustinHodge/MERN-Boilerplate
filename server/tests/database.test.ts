import Database from '../src/database';

describe('Database Object should exist', () => {
    const database = new Database();

    it('Should be instance of Database', () => {
        expect(database instanceof Database).toBeTruthy();
    });

    it('Should return connected Status', () => {
        const connectedStatus = database.isConnected();
        expect(typeof connectedStatus === 'boolean').toBeTruthy();
    });
});
