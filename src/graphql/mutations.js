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
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      cars {
        items {
          id
          carID
          issuesID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      cars {
        items {
          id
          carID
          issuesID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      cars {
        items {
          id
          carID
          issuesID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      IssueID {
        items {
          id
          carID
          issuesID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      IssueID {
        items {
          id
          carID
          issuesID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      IssueID {
        items {
          id
          carID
          issuesID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      userCars {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      userCars {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      userCars {
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
    }
  }
`;
export const createCarIssues = /* GraphQL */ `
  mutation CreateCarIssues(
    $input: CreateCarIssuesInput!
    $condition: ModelCarIssuesConditionInput
  ) {
    createCarIssues(input: $input, condition: $condition) {
      id
      carID
      issuesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      issues {
        id
        type
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        cars {
          nextToken
          startedAt
        }
      }
      car {
        id
        make
        model
        year
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        IssueID {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateCarIssues = /* GraphQL */ `
  mutation UpdateCarIssues(
    $input: UpdateCarIssuesInput!
    $condition: ModelCarIssuesConditionInput
  ) {
    updateCarIssues(input: $input, condition: $condition) {
      id
      carID
      issuesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      issues {
        id
        type
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        cars {
          nextToken
          startedAt
        }
      }
      car {
        id
        make
        model
        year
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        IssueID {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteCarIssues = /* GraphQL */ `
  mutation DeleteCarIssues(
    $input: DeleteCarIssuesInput!
    $condition: ModelCarIssuesConditionInput
  ) {
    deleteCarIssues(input: $input, condition: $condition) {
      id
      carID
      issuesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      issues {
        id
        type
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        cars {
          nextToken
          startedAt
        }
      }
      car {
        id
        make
        model
        year
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        IssueID {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      car {
        id
        make
        model
        year
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        IssueID {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
      }
      user {
        id
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        userCars {
          nextToken
          startedAt
        }
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      car {
        id
        make
        model
        year
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        IssueID {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
      }
      user {
        id
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        userCars {
          nextToken
          startedAt
        }
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      car {
        id
        make
        model
        year
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        IssueID {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
      }
      user {
        id
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        userCars {
          nextToken
          startedAt
        }
      }
    }
  }
`;
