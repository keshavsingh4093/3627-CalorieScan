import { userRouter } from "./routes/user.router.js";
import { dishRouter } from "./routes/dish.router.js";
import { connectToDatabase } from "./dbConnection.js";
import express from "express";
import "dotenv/config";

import { Dish } from "./models/dish.model.js";

// Dish.insertMany([
//   {
//     name: "Idli Vada Combo",
//     ingredients: [
//       {
//         ingredient: "678a6e724069fd5f9c267a19", // Idli
//         quantity: 2,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a1c", // vada
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a1a", // sambar
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a1b", // chutney
//         quantity: 1,
//       },
//     ],
//   },
//   {
//     name: "Idli Sambhar",
//     ingredients: [
//       {
//         ingredient: "678a6e724069fd5f9c267a19", // Idli
//         quantity: 2,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a1a", // sambar
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a1b", // chutney
//         quantity: 1,
//       },
//     ],
//   },
//   {
//     name: "Veg Thaali",
//     ingredients: [
//       {
//         ingredient: "678a6e724069fd5f9c267a1d", // paneer curry
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a1e", // seasonal veg curry
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a1f", // dal
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a20", // papad
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a26", // gulab jamun
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a25", // raita
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a21", // soup
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a24", // chapati
//         quantity: 2,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a22", // rice
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a23", // pickle
//         quantity: 1,
//       },
//     ],
//   },
//   {
//     name: "Dal Rice",
//     ingredients: [
//       {
//         ingredient: "678a6e724069fd5f9c267a1f", // dal
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a22", // rice
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a23", // pickle
//         quantity: 1,
//       },
//       {
//         ingredient: "678a6e724069fd5f9c267a20", // papad
//         quantity: 1,
//       },
//     ],
//   },
// ]).then((res)=>console.log("added"));

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/user", userRouter);

app.use("/dishes", dishRouter);

app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`Server started at http://localhost:${PORT}`);
})


