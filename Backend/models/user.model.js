import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: String,
    name: String,
    password: String
});

const User = new model("user", userSchema);

export { User };