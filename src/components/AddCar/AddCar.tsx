import { useState } from 'react';

import Button from 'components/Button/Button';

import { Form, Label, Input, Title, ButtonContainer, Select, ErrorText } from './AddCar.styled';
import { Container } from '../../pages/Home/HomePage.styled';

import { carBrands, popularColors } from 'utils/consts';
import { validate } from 'utils/validators/addNewCarValidator';

type Event = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

const AddCarPage = () => {
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

  const handleChange = (event: Event, property: string) => {
    console.log(event.target);
    setFormValues({ ...formValues, [property]: event.target.value });

    setErrors({ ...errors, [property]: '' });
  };

  const handleSubmit = async () => {
    const formErrors = validate(formValues);

    setErrors(formErrors);
  };

  const handleFocus = (property: string) => setErrors({ ...errors, [property]: '' });

  return (
    <Container>
      <Form>
        <Title>Add Car</Title>

        <Label>Model</Label>
        <Input
          type='text'
          value={formValues.model}
          onChange={(event: Event) => handleChange(event, 'model')}
          onFocus={() => handleFocus('model')}
        ></Input>
        <ErrorText>{errors.model}</ErrorText>

        <Label>Brand</Label>
        <Select
          name='brands'
          value={formValues.brand}
          onChange={(event: Event) => handleChange(event, 'brand')}
          onFocus={() => handleFocus('brand')}
        >
          {carBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </Select>
        <ErrorText>{errors.brand}</ErrorText>

        <Label>Main Color</Label>
        <Select
          name='colors'
          value={formValues.mainColor}
          onChange={(event: Event) => handleChange(event, 'mainColor')}
          onFocus={() => handleFocus('mainColor')}
        >
          {popularColors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </Select>
        <ErrorText>{errors.mainColor}</ErrorText>

        <Label>Value</Label>
        <Input
          value={formValues?.value || ''}
          onChange={(event: Event) => handleChange(event, 'value')}
          onFocus={() => handleFocus('value')}
        ></Input>
        <ErrorText>{errors.value}</ErrorText>

        <Label>Production Cost</Label>
        <Input
          value={formValues?.productionCost || ''}
          onChange={(event: Event) => handleChange(event, 'productionCost')}
          onFocus={() => handleFocus('productionCost')}
        ></Input>
        <ErrorText>{errors.productionCost}</ErrorText>

        <Label>Transportation Cost</Label>
        <Input
          value={formValues?.transportationCost || ''}
          onChange={(event: Event) => handleChange(event, 'transportationCost')}
          onFocus={() => handleFocus('transportationCost')}
        ></Input>
        <ErrorText>{errors.transportationCost}</ErrorText>

        <ButtonContainer>
          <Button disabled={false} text='Save' action={handleSubmit} />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default AddCarPage;
