import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type IssuesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CarMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Issues {
  readonly id: string;
  readonly type?: string;
  readonly description?: string;
  readonly carID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Issues, IssuesMetaData>);
  static copyOf(source: Issues, mutator: (draft: MutableModel<Issues, IssuesMetaData>) => MutableModel<Issues, IssuesMetaData> | void): Issues;
}

export declare class Car {
  readonly id: string;
  readonly make?: string;
  readonly model?: string;
  readonly year?: number;
  readonly IssueID?: (Issues | null)[];
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Car, CarMetaData>);
  static copyOf(source: Car, mutator: (draft: MutableModel<Car, CarMetaData>) => MutableModel<Car, CarMetaData> | void): Car;
}

export declare class User {
  readonly id: string;
  readonly email?: string;
  readonly userCars?: (Car | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}