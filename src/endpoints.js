import { API_V2 } from './constants';

//Pokemons
export const POKEMONS = `${API_V2}pokemon/`;
export const POKEMON_DETAIL = (pokemonName) =>
  `${POKEMONS}${pokemonName}/`;




