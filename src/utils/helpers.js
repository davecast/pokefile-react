export const setNumberPokemon = (number) => {
  let newNumber;
  if (number < 100) {
    newNumber = number < 10 ? `00${number}` : `0${number}`;
  } else {
    newNumber = number;
  }
  return newNumber;
};

export const getType = (types) => {
  return types.map(({ type }) => type.name)[0];
};
