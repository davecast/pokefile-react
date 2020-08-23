import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../../services/pokemons";

import Container from "../Container";
import Grid from "../Grid";
import Pokemon from "../../components/Pokemon";

export default function PokemonsList() {
  const [pokemonList, setpokemonList] = useState([]);

  useEffect(() => {
    fetchPokemons().then((res) => {
      setpokemonList([...res.data.results]);
    });
  }, []);

  if (pokemonList.length === 0) {
    return <Container>Loading...</Container>;
  }
  return (
    <Container>
      <Grid>
        {pokemonList.map(({ name }) => (
          <Pokemon key={name} find={name} />
        ))}
      </Grid>
    </Container>
  );
}
