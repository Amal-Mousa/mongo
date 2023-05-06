import { } from 'dotenv/config';
import mongoose from 'mongoose';

const connection = () => mongoose.connect(process.env.DEV_DB_URL);

export default connection;