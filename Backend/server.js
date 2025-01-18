import { userRouter } from "./routes/user.router.js";
import { dishRouter } from "./routes/dish.router.js";
import { connectToDatabase } from "./dbConnection.js";
import cors from 'cors';
import express from "express";
import "dotenv/config";

import { Dish } from "./models/dish.model.js";

const app = express();
const PORT = process.env.PORT || 8800; 

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/dishes", dishRouter);

app.listen(PORT, async () => {
    try {
        await connectToDatabase();
        console.log(`Server started at 
http://localhost/
:${PORT}`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit if the database connection fails
    }
});