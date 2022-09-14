import { useEffect, useState } from "react";
import {
  getPokemonData,
  getPokemonsFromDabase,
} from "../Helpers/getPokemonData";

export const useFetch = id => {
  const [pokemonData, setPokemonData] = useState({});

  const getData = async () => {
    const data = await getPokemonData(id);
    setPokemonData(data);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return {
    pokemonData,
  };
};

export const useFetchDB = () => {
  const [pokemons, setPokemons] = useState([]);

  const getData = async () => {
    const data = await getPokemonsFromDabase();
    setPokemons(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    pokemons,
  };
};
