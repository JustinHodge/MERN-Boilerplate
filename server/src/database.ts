import { Mongoose } from 'mongoose';

class Database {
    DB_URI = process.env.DB_URI ?? '';
    database = new Mongoose();
    connected = false;

    connectDB = async () => {
        try {
            await this.database.connect(this.DB_URI);
            this.connected = true;
        } catch (err) {
            throw new Error(`Failed to connect to MongoDB -- ${err}`);
        }
    };

    isConnected = () => {
        return this.connected;
    };
}

export default Database;
