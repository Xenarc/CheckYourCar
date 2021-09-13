export const GetUser = /* GraphQL */ `
  query GetUser($email: String!) {
  listUsers(filter: {email: {eq: $email}}) {
    items {
      userCars {
        items {
          id
        }
      }
    }
  }
}`;
export const GetIssues = /* GraphQL */ `
  query GetIssues($carID: ID!) {
  listIssues(filter: {carID: {eq: $carID}}) {
    items {
      carID
      description
      type
      createdAt
      updatedAt
    }
  }
}`;

export const SearchForCar = /* GraphQL */ `
  query searchForCar($make: String, $model: String, $year: Int) {
  listCars(filter: {
    make: {contains: $make},
    model: {contains: $model},
    or: {
      make: {contains: $make},
      model: {contains: $model},
      year: {eq: $year}
    }
  }) {
    nextToken
    startedAt
    items {
      make
      id
      model
      year
    }
  }
}`;
