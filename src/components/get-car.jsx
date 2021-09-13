import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const GetCar = ({ callback }) => {
  const {
    // eslint-disable-next-line no-unused-vars
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const onSubmit = (data) => callback(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formMake">
        <Form.Label>Car Make. E.g., Toyota</Form.Label>
        <Form.Control type="text" placeholder="Enter car make" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formModel">
        <Form.Label>Car Model. E.g., Corolla</Form.Label>
        <Form.Control type="text" placeholder="Enter car model" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formYear">
        <Form.Label>Car Year. E.g., 2014</Form.Label>
        <Form.Control type="number" placeholder="Enter car year" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Check Your Car
      </Button>
    </Form>
  );
};

export default GetCar;
