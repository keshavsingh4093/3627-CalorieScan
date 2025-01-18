import { connect } from "mongoose";
import "dotenv/config";

const DB_URL = process.env.DB_URL;

async function connectToDatabase() {
    try {
        await connect(DB_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error.message);
    }
}

export { connectToDatabase };