import { signUpUser, loginUser } from "../controllers/user.controller.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", signUpUser);

userRouter.post("/login", loginUser);

export { userRouter };