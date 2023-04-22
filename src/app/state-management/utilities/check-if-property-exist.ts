export const checkIfPropertyExist = (
  state: any,
  property: string,
  errorMessage: string
) => {
  const condition = state.hasOwnProperty(property);
  return checkIfCondiitonMet(condition, errorMessage);
};

export const checkIfCondiitonMet = (
  condition: { met: boolean; value: any },
  errorMessage: string
) => {
  if(condition.met) {
    return condition.value;
  } else {
    console.error(errorMessage);
    throw Error(errorMessage);
  }
};
