import axios from "axios";

export const getPokemonData = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const {data} = await axios.get(url);

  const abilities = data.abilities.map(e => e.ability.name);
  const types = data.types.map(e => e.type.name);

  const pokedata = {
    abilities,
    base_experience: data.base_experience,
    id: data.id,
    img: data.sprites.other.dream_world.front_default,
    name: data.name,
    types,
    weight: data.weight,
  };

  return pokedata;
};
