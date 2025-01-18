import { showAllDishes, showDishDetails } from "../controllers/dish.controller.js";
import { Router } from "express";

const dishRouter = Router();

dishRouter.get("/", showAllDishes);

dishRouter.get("/:dishId", showDishDetails);


export { dishRouter };