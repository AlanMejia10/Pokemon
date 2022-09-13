import { useEffect, useState } from "react";
import { getPokemonData } from "../Helpers/getPokemonData";

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
