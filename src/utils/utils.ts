export const isEmpty = (object: { [key: string]: string }) => {
  return Object.values(object).every((el) => el === '' || el === undefined);
};

export const hasEmptyField = (object: { [key: string]: any }) => {
  return Object.values(object).some((el) => el === '' || el === undefined);
};
