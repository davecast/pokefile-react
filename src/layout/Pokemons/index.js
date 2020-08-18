import React from 'react';
import { useQuery } from 'react-query';
import { fetchPokemons } from '../../services/pokemons';

import Container from '../Container';
import Pokemon from '../../components/Pokemon';
import Grid from '../Grid';

const PokemonsList = () => {

  const { data: pokemonsData } = useQuery(
    'pokemonList',
    fetchPokemons,
  );

  const pokemons = pokemonsData?.data.results || [];

  if (pokemons.length === 0) {
    return <Container>Loading...</Container>
  }
  return (
    <Container>
      <Grid>
        {
          pokemons.map(({ name }) => {
            return <Pokemon key={name} find={name} />
          })
        }
      </Grid>
    </Container>
  );
}
 
export default PokemonsList;