import { connect } from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGO_URI, {
        });
        console.log(`Base de Datos MongoDB conectada: ${conn.connection.host}`);
    } catch (error) {
        console.error();
        process.exit(1);
    }
};

export default connectDB;