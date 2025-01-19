import { userRouter } from "./routes/user.router.js";
import { dishRouter } from "./routes/dish.router.js";
import { connectToDatabase } from "./dbConnection.js";
import cors from 'cors';
import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8800; 

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/dishes", dishRouter);


const clientId = "Ov23liZ4faLX4vwnY8uD";
const githubRedirectUrl = "http://localhost:8800/login/github/callback";

app.get("/auth/github", async (req, res) => {
    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${githubRedirectUrl}`;

    res.redirect(githubUrl);
})

app.get("/login/github/callback", async (req, res) => {
    const code = req.query.code;
    console.log("code", code);
    
    res.status(200).json({ msg: "Login successful using GitHub" });
});

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