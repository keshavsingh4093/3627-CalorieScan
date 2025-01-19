import { Schema, model } from "mongoose";
import { Ingredient } from "./ingredient.model.js";

const ingredients = new Schema({
  ingredient: {
    type: Schema.Types.ObjectId,
    ref: "ingredient",
  },
  quantity: Number,
});

const dishSchema = new Schema({
    name: String,
    image: String,
    ingredients: [ingredients]
});

const Dish = new model("dish", dishSchema);

export { Dish };