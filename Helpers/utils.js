const allPokemons = 905;

export const generateRandomId = () => {
  return Math.floor(Math.random() * allPokemons);
};
