import request from '../utils/request';
import { POKEMONS, POKEMON_DETAIL } from '../endpoints';

export function fetchPokemons(key, params = {}) {
  return request(POKEMONS, {
    params: params,
  });
}

export function fetchPokemonDetail(pokemonName) {
  return request(POKEMON_DETAIL(pokemonName));
}

