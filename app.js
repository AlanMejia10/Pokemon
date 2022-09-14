import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./Backend/database/config.js";
import Pokemon from "./Backend/models/pokemon.js";

dotenv.config();
const app = express();

//middleware
app.use(express.json());
//this middleware is used for allowing cross-origin requests
app.use(cors());

dbConnection();

app.get("/api/pokemons", (req, res) => {
  // gettting data from react
  Pokemon.find()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

app.post("/api/pokemons", (req, res) => {
  // gettting data from react
  const { abilities, base_experience, img, name, types, weight, id } = req.body;

  const pokemon = Pokemon({
    abilities,
    base_experience,
    img,
    name,
    types,
    weight,
    id,
  });

  pokemon.save();

  res.json({
    message: "You caught a pokemon",
    saved: true,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
