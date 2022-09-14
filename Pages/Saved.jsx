import { PokeCard } from "../Components/PokeCard";
import { useFetchDB } from "../Hooks/useFetch";

export const Saved = () => {
  const { pokemons } = useFetchDB();
  console.log(pokemons);
  return (
    <>
      <div className="container text-center mt-4">
        <h1>You caught these pokemons</h1>
      </div>
      <div className="container">
        <div className="row align-items-center">
          {pokemons.map((pokemonData, idx) => {
            return (
              <div key={idx} className="col-6">
                <PokeCard pokemonData={pokemonData} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
