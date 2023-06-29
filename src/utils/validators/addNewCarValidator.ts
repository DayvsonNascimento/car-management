interface Fields {
  model: string;
  brand: string;
  mainColor: string;
  value: number | undefined;
  productionCost: number | undefined;
  transportationCost: number | undefined;
}

export const validate = (fields: Fields) => {
  const errors = {
    model: '',
    brand: '',
    mainColor: '',
    value: '',
    productionCost: '',
    transportationCost: '',
  };

  if (!fields.model) {
    errors.model = 'Required';
  } else if (fields.model.length > 30) {
    errors.model = 'Must be 30 characters or less';
  }

  if (!fields.brand) {
    errors.brand = 'Required';
  }

  if (!fields.mainColor) {
    errors.mainColor = 'Required';
  }

  if (!fields.value) {
    errors.value = 'Required';
  } else if (!Number.isInteger(fields.value)) {
    errors.value = 'Decimals are not allowed';
  }

  if (!fields.productionCost) {
    errors.productionCost = 'Required';
  } else if (!Number.isInteger(fields.productionCost)) {
    errors.productionCost = 'Decimals are not allowed';
  }

  if (!fields.transportationCost) {
    errors.transportationCost = 'Required';
  } else if (!Number.isInteger(fields.transportationCost)) {
    errors.transportationCost = 'Decimals are not allowed';
  }

  return errors;
};
