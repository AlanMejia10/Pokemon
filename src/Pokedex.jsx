import { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { PokeCard } from "../Components/PokeCard";
import { saveToDatabase } from "../Helpers/getPokemonData";
import { generateRandomId } from "../Helpers/utils";
import { useNavigate } from "react-router-dom";

import "./style.css";

export const Pokedex = () => {
  const [id, setId] = useState(generateRandomId());
  const { pokemonData } = useFetch(id);
  const time = 30000;
  const navigate = useNavigate();

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

  const onNext = () => {
    const randomId = generateRandomId();
    setId(randomId);
  };

  const onSaveData = async currentPokemon => {
    const data = await saveToDatabase(currentPokemon);
    navigate("/saved");
    /*todo: check the return saved property to display a notification
     */
  };

  return (
    <>
      <div
        className="d-flex poke-container justify-content-center 
          align-items-center"
      >
        <PokeCard
          pokemonData={pokemonData}
          updateTime={time / 1000}
          onNext={onNext}
          onSaveData={onSaveData}
        />
      </div>
    </>
  );
};
