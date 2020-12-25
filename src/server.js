const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const GraphQLSchema = require('./schemas/GraphQLSchema');
const { rootResolvers } = require('./resolvers');

mongoose.connect('mongodb://localhost:27017/exercises', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('conneted to database');
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: GraphQLSchema,
  rootValue: rootResolvers,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');