import { showAllDishes, showDishDetails, showCalorieData } from "../controllers/dish.controller.js";
import { Router } from "express";

const dishRouter = Router();

dishRouter.get("/", showAllDishes);

dishRouter.get("/calories", showCalorieData);

dishRouter.get("/:dishId", showDishDetails);

export { dishRouter };