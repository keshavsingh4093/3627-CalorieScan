import { Schema, model } from "mongoose";

const ingredientSchema = new Schema({
    name: String,
    unit: String,
    calorie: Number
});

const Ingredient = new model("ingredient", ingredientSchema);

export { Ingredient };