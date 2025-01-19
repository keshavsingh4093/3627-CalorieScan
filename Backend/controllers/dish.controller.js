import { Ingredient } from "../models/ingredient.model.js";
import { Dish } from "../models/dish.model.js";

const showAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find().populate("ingredients.ingredient")

        res.status(200).json(dishes);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
    }
}

const showDishDetails = async (req, res) => {
    try {
        const { dishId } = req.params;

        const dishDetails = await Dish.findOne({ _id: dishId }).populate(
          "ingredients.ingredient"
        );

        res.status(200).json(dishDetails);

    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
    }
}

const showCalorieData = async (req, res) => {
    try {
        const ingredients = await Ingredient.find();

        const keyValueOfCalories = {};

        for (const ingredient of ingredients) {
            keyValueOfCalories[ingredient.name] = ingredient.calorie;
        }

        res.status(200).json(keyValueOfCalories);

    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export { showAllDishes, showDishDetails, showCalorieData };