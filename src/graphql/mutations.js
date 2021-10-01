/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIssues = /* GraphQL */ `
  mutation CreateIssues(
    $input: CreateIssuesInput!
    $condition: ModelIssuesConditionInput
  ) {
    createIssues(input: $input, condition: $condition) {
      id
      type
      PRA
      Car {
        id
        make
        model
        year
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateIssues = /* GraphQL */ `
  mutation UpdateIssues(
    $input: UpdateIssuesInput!
    $condition: ModelIssuesConditionInput
  ) {
    updateIssues(input: $input, condition: $condition) {
      id
      type
      PRA
      Car {
        id
        make
        model
        year
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteIssues = /* GraphQL */ `
  mutation DeleteIssues(
    $input: DeleteIssuesInput!
    $condition: ModelIssuesConditionInput
  ) {
    deleteIssues(input: $input, condition: $condition) {
      id
      type
      PRA
      Car {
        id
        make
        model
        year
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
      id
      make
      model
      year
      users {
        items {
          id
          userID
          carID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
      id
      make
      model
      year
      users {
        items {
          id
          userID
          carID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
      id
      make
      model
      year
      users {
        items {
          id
          userID
          carID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      UserCars {
        items {
          id
          userID
          carID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      UserCars {
        items {
          id
          userID
          carID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      UserCars {
        items {
          id
          userID
          carID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUserCar = /* GraphQL */ `
  mutation CreateUserCar(
    $input: CreateUserCarInput!
    $condition: ModelUserCarConditionInput
  ) {
    createUserCar(input: $input, condition: $condition) {
      id
      userID
      carID
      user {
        id
        email
        UserCars {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      car {
        id
        make
        model
        year
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUserCar = /* GraphQL */ `
  mutation UpdateUserCar(
    $input: UpdateUserCarInput!
    $condition: ModelUserCarConditionInput
  ) {
    updateUserCar(input: $input, condition: $condition) {
      id
      userID
      carID
      user {
        id
        email
        UserCars {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      car {
        id
        make
        model
        year
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserCar = /* GraphQL */ `
  mutation DeleteUserCar(
    $input: DeleteUserCarInput!
    $condition: ModelUserCarConditionInput
  ) {
    deleteUserCar(input: $input, condition: $condition) {
      id
      userID
      carID
      user {
        id
        email
        UserCars {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      car {
        id
        make
        model
        year
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
