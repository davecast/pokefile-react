import React, { useState, useEffect } from "react";
import { fetchPokemonDetail } from "../../services/pokemons";
import { setNumberPokemon, getType } from "../../utils/helpers";
import { IMAGE_ENDPOINT } from "../../constants";
import {
  PokemonContent,
  PokemonThumbnail,
  PokemonFigure,
  PokemonInfo,
  PokemonImage,
  PokemonMeta,
  PokemonName,
  PokemonNumber,
  PokemonPosition,
  PokemonTypes,
  PokemonType,
} from "./styled";

export default function Pokemon({ find }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemonDetail(find).then((res) => {
      setPokemon({
        ...res.data,
      });
    });
  }, [find]);

  const { name, id, types } = pokemon;

  if (Object.keys(pokemon).length === 0) {
    return (
      <PokemonContent>
        <PokemonThumbnail></PokemonThumbnail>
        <PokemonInfo></PokemonInfo>
      </PokemonContent>
    );
  }
  return (
    <PokemonContent color={getType(types)}>
      <PokemonThumbnail className="thumbnail">
        <PokemonFigure>
          <PokemonImage
            src={`${IMAGE_ENDPOINT}${setNumberPokemon(id)}.png`}
            alt="Charmander"
          />
        </PokemonFigure>
      </PokemonThumbnail>
      <PokemonInfo>
        <PokemonMeta>
          <PokemonName>{name}</PokemonName>
          <PokemonNumber>
            Número
            <PokemonPosition color={getType(types)}>
              #{setNumberPokemon(id)}
            </PokemonPosition>
          </PokemonNumber>
        </PokemonMeta>
        <PokemonTypes>
          {types.map(({ slot, type }) => {
            const { name } = type;
            return <PokemonType key={slot} type={name} />;
          })}
        </PokemonTypes>
      </PokemonInfo>
    </PokemonContent>
  );
}
