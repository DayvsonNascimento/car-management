import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import DefaulInput from 'components/Input/DefaultInput';
import CustomSelect from 'components/Input/CustomSelect/CustomSelect';
import Button from 'components/Button/Button';

import { Form, Title, ButtonContainer } from './AddCarForm.styled';

import { carBrands, popularColors } from 'utils/consts';
import { validate } from 'utils/validators/addNewCarValidator';
import { isEmpty, parseNumberInput } from 'utils/utils';

import { Event } from 'interfaces/DefaultInput';

import { addCar } from 'services/Cars/cars';

const AddCarForm = () => {
  const [formValues, setFormValues] = useState({
    model: '',
    brand: '',
    mainColor: '',
    value: undefined,
    productionCost: undefined,
    transportationCost: undefined,
  });
  const [errors, setErrors] = useState({
    model: '',
    brand: '',
    mainColor: '',
    value: '',
    productionCost: '',
    transportationCost: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    property: string,
    event: Event,
    parse?: (value: string) => number | undefined,
  ) => {
    const targetValue = event?.target.value;
    const value = typeof parse === 'function' ? parse(targetValue) : targetValue;

    if (value !== undefined || event.target.value.length === 0) {
      setFormValues({ ...formValues, [property]: value });
    }
  };

  const handleFocus = (property: string) => setErrors({ ...errors, [property]: '' });

  const handleSubmit = async () => {
    setIsLoading(true);

    const formErrors = validate(formValues);

    if (isEmpty(formErrors)) {
      await addCar(formValues);

      navigate('/');
    } else {
      setErrors(formErrors);

      setIsLoading(false);
    }
  };

  return (
    <Form>
      <Title>Add Car</Title>

      <DefaulInput
        label='Model'
        value={formValues.model}
        onChange={(event: Event) => handleChange('model', event)}
        onFocus={() => handleFocus('model')}
        errorMessage={errors.model}
      />

      <CustomSelect
        label='Brand'
        name='brands'
        value={formValues.brand}
        options={carBrands}
        onChange={(event: Event) => handleChange('brand', event)}
        onFocus={() => handleFocus('brand')}
        errorMessage={errors.brand}
      />

      <CustomSelect
        label='Main Color'
        name='colors'
        value={formValues.mainColor}
        options={popularColors}
        onChange={(event: Event) => handleChange('mainColor', event)}
        onFocus={() => handleFocus('mainColor')}
        errorMessage={errors.mainColor}
      />

      <DefaulInput
        label='Value'
        value={formValues.value}
        onChange={(event: Event) => handleChange('value', event, parseNumberInput)}
        onFocus={() => handleFocus('value')}
        errorMessage={errors.value}
      />

      <DefaulInput
        label='Production Cost'
        value={formValues.productionCost}
        onChange={(event: Event) => handleChange('productionCost', event, parseNumberInput)}
        onFocus={() => handleFocus('productionCost')}
        errorMessage={errors.productionCost}
      />

      <DefaulInput
        label='Transportation Cost'
        value={formValues.transportationCost}
        onChange={(event: Event) => handleChange('transportationCost', event, parseNumberInput)}
        onFocus={() => handleFocus('transportationCost')}
        errorMessage={errors.transportationCost}
      />

      <ButtonContainer>
        <Button
          customClass={'cancel-button'}
          disabled={isLoading}
          text='Cancel'
          action={() => navigate('/')}
        />

        <Button
          disabled={!isEmpty(errors) || isLoading}
          text='Save'
          loading={isLoading}
          action={handleSubmit}
        />
      </ButtonContainer>
    </Form>
  );
};

export default AddCarForm;
