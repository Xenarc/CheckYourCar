/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIssues = /* GraphQL */ `
  subscription OnCreateIssues {
    onCreateIssues {
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
export const onUpdateIssues = /* GraphQL */ `
  subscription OnUpdateIssues {
    onUpdateIssues {
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
export const onDeleteIssues = /* GraphQL */ `
  subscription OnDeleteIssues {
    onDeleteIssues {
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
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCarIssues = /* GraphQL */ `
  subscription OnCreateCarIssues {
    onCreateCarIssues {
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
export const onUpdateCarIssues = /* GraphQL */ `
  subscription OnUpdateCarIssues {
    onUpdateCarIssues {
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
export const onDeleteCarIssues = /* GraphQL */ `
  subscription OnDeleteCarIssues {
    onDeleteCarIssues {
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
export const onCreateUserCar = /* GraphQL */ `
  subscription OnCreateUserCar {
    onCreateUserCar {
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
export const onUpdateUserCar = /* GraphQL */ `
  subscription OnUpdateUserCar {
    onUpdateUserCar {
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
export const onDeleteUserCar = /* GraphQL */ `
  subscription OnDeleteUserCar {
    onDeleteUserCar {
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
