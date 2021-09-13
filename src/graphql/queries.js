/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIssues = /* GraphQL */ `
  query GetIssues($id: ID!) {
    getIssues(id: $id) {
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
export const listIssues = /* GraphQL */ `
  query ListIssues(
    $filter: ModelIssuesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIssues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncIssues = /* GraphQL */ `
  query SyncIssues(
    $filter: ModelIssuesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncIssues(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
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
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCars = /* GraphQL */ `
  query SyncCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCars(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCarIssues = /* GraphQL */ `
  query SyncCarIssues(
    $filter: ModelCarIssuesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCarIssues(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserCars = /* GraphQL */ `
  query SyncUserCars(
    $filter: ModelUserCarFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserCars(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
        user {
          id
          email
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
