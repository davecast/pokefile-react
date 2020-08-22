import React, { useState, useEffect } from 'react';
import { fetchPokemons } from '../../services/pokemons';

import Container from '../Container';
import Pokemon from '../../components/Pokemon';
import Grid from '../Grid';

const PokemonsList = () => {

  const [pokemonList, setpokemonList] = useState([]);

  useEffect(() => {
    fetchPokemons().then((res) => {
      setpokemonList([
        ...res.data.results,
      ]);
    });
  }, []);
  
  if (pokemonList.length === 0) {
    return <Container>Loading...</Container>
  }
  return (
    <Container>
      <Grid>
        {
          pokemonList.map(({ name }) => {
            return <Pokemon key={name} find={name} />
          })
        }
      </Grid>
    </Container>
  );
}
 
export default PokemonsList;