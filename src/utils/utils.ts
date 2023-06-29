export const isEmpty = (object: { [key: string]: string }) => {
  return Object.values(object).every((el) => el === '' || el === undefined);
};
