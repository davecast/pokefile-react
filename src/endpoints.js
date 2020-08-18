const API_V2 = "https://pokeapi.co/api/v2/";

//Pokemons
export const POKEMONS = `${API_V2}pokemon/`;
export const POKEMON_DETAIL = (pokemonName) =>
  `${POKEMONS}${pokemonName}/`;