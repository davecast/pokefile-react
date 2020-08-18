export const setNumberPokemon = (number) => {
  let newNumber;

  if (number < 10) {
    newNumber = `00${number}`;
  } else if (number < 100) {
    newNumber = `0${number}`;
  } else {
    newNumber = number;
  }

  return newNumber;
};

export const getType = (types) => {
  let typesList = types.map(({ type }) => {
    return type.name;
  });
  return typesList[0];
}