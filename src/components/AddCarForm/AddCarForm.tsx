import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import DefaulInput from 'components/Input/DefaultInput';
import CustomSelect from 'components/Input/CustomSelect/Select.styled';
import Button from 'components/Button/Button';

import { Form, Title, ButtonContainer } from './AddCarForm.styled';

import { CarData } from 'interfaces/Car';

import { carBrands, popularColors } from 'utils/consts';
import { validate } from 'utils/validators/addNewCarValidator';
import { isEmpty } from 'utils/utils';

import { addCar } from 'services/Cars/cars';

type Event = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

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
  const navigate = useNavigate();

  const parseNumberInput = (event: Event) => {
    const inputValue = event?.target.value;

    if (/^\d+$/.test(inputValue)) return parseInt(inputValue, 10);
  };

  const handleChange = (
    property: string,
    event: Event,
    parse?: (event: Event) => number | undefined,
  ) => {
    const value = typeof parse === 'function' ? parse(event) : event?.target.value;

    if (value !== undefined || event.target.value.length === 0) {
      setFormValues({ ...formValues, [property]: value });
    }
  };

  const handleFocus = (property: string) => setErrors({ ...errors, [property]: '' });

  const handleSubmit = async () => {
    const formErrors = validate(formValues);

    if (isEmpty(formErrors)) {
      await addCar(formValues);

      navigate('/');
    } else {
      setErrors(formErrors);
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
          className={'cancel-button'}
          disabled={false}
          text='Cancel'
          action={() => navigate('/')}
        />

        <Button disabled={!isEmpty(errors)} text='Save' action={handleSubmit} />
      </ButtonContainer>
    </Form>
  );
};

export default AddCarForm;
