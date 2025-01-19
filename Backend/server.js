import { userRouter } from "./routes/user.router.js";
import { dishRouter } from "./routes/dish.router.js";
import { connectToDatabase } from "./dbConnection.js";
import cors from 'cors';
import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT; 

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/dishes", dishRouter);

app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`Server started at http://localhost:${PORT}`);
});