import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI, {});
  } catch (error) {
    console.error();
    process.exit(1);
  }
};

export default connectDB;