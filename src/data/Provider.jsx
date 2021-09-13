// @ts-nocheck
import { useCallback } from 'react';
import { API } from 'aws-amplify';
import { getCar } from '../graphql/queries';
import { GetUser, SearchForCar } from '../graphql/provider-queries';

export const getUser = useCallback(async (email) => API.graphql({
  query: GetUser,
  variables: {
    input: {
      email,
    },
  },
}).GetUser.items[0], []);

export const getIssues = useCallback(async (carId) => API.graphql({
  query: getCar,
  variables: {
    input: {
      id: carId,
    },
  },
}).getCar.items, []);

export const getUserIssues = useCallback(async (email) => {
  const user = getUser(email);

  let issues = [];
  // For each of the user's cars
  user.userCars.forEach((car) => {
    // Add all of the car's issues
    car.issues.forEach((issue) => {
      issues = [...issues, issue];
    });
  });

  return issues;
}, []);

export const findCar = useCallback(async (make, model, year) => API.graphql({
  query: SearchForCar,
  variables: {
    input: {
      make,
      model,
      year,
    },
  },
}).SearchForCar.items, []);
