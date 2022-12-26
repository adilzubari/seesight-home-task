const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const express = require("express");
const userData = require("./MOCK_DATA.json");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const MONGODB =
  "mongodb+srv://seesight:see.sight@cluster0.bv3nwrz.mongodb.net/?retryWrites=true&w=majority";

// const typeDefs = require("./graphql/typeDefs");
// const resolvers = require("./graphql/resolvers");

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
const app = express();

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lasName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "GraphQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// mongoose
//   .connect(MONGODB, { useNewUrlParser: true })
//   .then(() => {
//     console.log("DB connected");
//     return app.listen({ port: 5000 });
//   })
//   .then(() => {
//     console.log(`server running at ${res.url}`);
//   });

app.listen(5000, () => {
  console.log("Server Listening");
});
