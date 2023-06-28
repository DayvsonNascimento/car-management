import { useState } from 'react';

import { Form, Label, Input, Button, Title, } from './AddCar.styled';

import { Container } from '../../pages/Home/HomePage.styled';

const AddCarPage = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <Container>
      <Form>
        <Title>Add Car</Title>

        <Label>Model:</Label>
        <Input type='text' value={formValues.fullName}></Input>

        <Label>Brand:</Label>
        <Input type='text' value={formValues.email}></Input>

        <Label>Main Color</Label>
        <Input type='password' value={formValues.password}></Input>

        <Label>Value</Label>
        <Input type='password' value={formValues.confirmPassword}></Input>

        <Label>Production Cost</Label>
        <Input type='password' value={formValues.confirmPassword}></Input>

        <Label>Transportation Cost</Label>
        <Input type='password' value={formValues.confirmPassword}></Input>

        <Button type='submit'>Save</Button>
      </Form>
    </Container>
  );
};

export default AddCarPage;
