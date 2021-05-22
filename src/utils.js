export const sortByLastName = (a, b) => {
  if (a.lastName > b.lastName) {
    return 1;
  } else if (a.lastName < b.lastName) {
    return -1;
  } else return 0;
};
