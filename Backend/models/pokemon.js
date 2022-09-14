import { Schema, model } from "mongoose";

export const userSchema = Schema({
  abilities: Array,
  base_experience: Number,
  img: String,
  name: String,
  types: Array,
  weight: Number,
  id: Number,
});

const pokemonModel = model("Pokemon", userSchema);
export default pokemonModel;
