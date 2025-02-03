import { Ingredient } from "../models/ingredient.model.js";
import { Dish } from "../models/dish.model.js";
{/*kncijdhf */ }
const showAllDishes = async (req, res) => {
    try {
        const dishDetails = await Dish.find().populate("ingredients.ingredient")

        const Dishes = [];

        for (let i = 0; i < dishDetails.length; i++) {
            Dishes[i] = {};

            Dishes[i].dishName = dishDetails[i].name;
            Dishes[i].image = dishDetails[i].image;
            Dishes[i].items = [];

            for (const item of dishDetails[i].ingredients) {
                Dishes[i]["items"].push({ name: item.ingredient.name, quantity: item.quantity });
            }
        }

        res.status(200).json(Dishes);

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
        res.status(400).json({ msg: error.message })
    }
}

export { showAllDishes, showDishDetails, showCalorieData };