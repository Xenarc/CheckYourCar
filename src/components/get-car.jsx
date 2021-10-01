/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const GetCar = ({ callback, submit }) => {
  const {
    // eslint-disable-next-line no-unused-vars
    register, handleSubmit, watch, formState: { errors },
  } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = async (data) => {
    console.log('data');
    console.log(data);
    submit({ make: data.make, model: data.model, year: data.year });
    callback(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formMake">
        <Form.Label>Car Make. E.g., Toyota</Form.Label>
        <Form.Control type="text" placeholder="Enter car make" name="make" {...register('make', { required: 'Please enter a make.' })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formModel">
        <Form.Label>Car Model. E.g., Corolla</Form.Label>
        <Form.Control type="text" placeholder="Enter car model" name="model" {...register('model', { required: 'Please enter a model.' })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formYear">
        <Form.Label>Car Year. E.g., 2014</Form.Label>
        <Form.Control type="number" min={1900} max={2021} placeholder="Enter car year" name="year" {...register('year', { required: 'Please enter a year.' })} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Car
      </Button>
    </Form>
  );
};

export default GetCar;
