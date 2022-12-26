import { GraphQLClient, gql } from "graphql-request";

export default function UseGraphQL() {
  const endpoint = "http://localhost:5000/graphql" as string;

  const graphQLClient = new GraphQLClient(endpoint);

  const createUser = async (
    firstName: String,
    lastName: String,
    email: String,
    password: String
  ) => {
    const mutation = gql`
      mutation AddUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
      ) {
        createUser(
          object: {
            title: $firstName
            lastName: $lastName
            email: $email
            password: $password
          }
        ) {
          firstName
          lastName
          email
          password
        }
      }
    `;

    const variables = {
      firstName,
      lastName,
      email,
      password,
    };
    const data = await graphQLClient.request(mutation, variables);
    console.log(data);
  };

  const updateUser = () => {};

  const getUsers = async () => {
    const query = gql`
      query {
        getAllUsers {
          email
        }
      }
    `;

    const data = await graphQLClient.request(query);
    console.log("=>", data);

    return [];
  };

  return { createUser, updateUser, getUsers };
}
