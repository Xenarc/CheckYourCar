// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Issues, Car, User } = initSchema(schema);

export {
  Issues,
  Car,
  User
};