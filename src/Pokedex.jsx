import {useEffect, useState} from "react";
import {useFetch} from "../Hooks/useFetch";
import {PokeCard} from "../Components/PokeCard";
import {saveToDatabase} from "../Helpers/getPokemonData";

import "./style.css";

export const Pokedex = () => {
  const [id, setId] = useState(1);
  const allPokemons = 905;
  const {pokemonData} = useFetch(id);
  const time = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      const randomId = generateRandomId();
      setId(randomId);
    }, time);
    return () => {
      // clears the interval
      clearInterval(interval);
    };
  });

  const generateRandomId = () => {
    return Math.floor(Math.random() * allPokemons);
  };

  const onNext = () => {
    const randomId = generateRandomId();
    setId(randomId);
  }

  const onSaveData = (currentPokemon) => {
    saveToDatabase(currentPokemon);
  }

  return (
    <>
      <div
        className="d-flex poke-container justify-content-center 
          align-items-center"
      >
        <PokeCard pokemonData={pokemonData} updateTime={time / 1000}
          onNext={onNext} onSaveData={onSaveData} />
      </div>
    </>
  );
};
