const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { ExerciseClass } = require('./constants')


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type ExerciseClass {
    getExercise: Exercise
  }

  type Exercise {
    id: Int
    name: String
    movement: String
    type: String
    sets: Int
    reps: Int
    superset(bodyPart: String): ExerciseClass
  }

  type Query {
    chestExercise: ExerciseClass 
    legExercise: ExerciseClass
    shoulderExercise: ExerciseClass
    armExercise: ExerciseClass
    backExercise: ExerciseClass
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  chestExercise: () => {
    return new ExerciseClass('chest')
  },
  legExercise: () => {
    return new ExerciseClass('legs')
  },
  shoulderExercise: () => {
    return new ExerciseClass('shoulders')
  },
  armExercise: () => {
    return new ExerciseClass('arms')
  },
  backExercise: () => {
    return new ExerciseClass('back')
  }
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');