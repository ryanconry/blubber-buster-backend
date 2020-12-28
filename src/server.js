const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const path = require('path');
const GraphQLSchema = require('./schemas/GraphQLSchema');
const { rootResolvers } = require('./resolvers');

mongoose.connect('mongodb+srv://burlyboi:burlyboi@cluster0.jm4nl.mongodb.net/exercises?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Conneted to MongoDB Atlas server.');
});

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: GraphQLSchema,
  rootValue: rootResolvers,
  graphiql: true,
}));

app.use(express.static('public'));

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');