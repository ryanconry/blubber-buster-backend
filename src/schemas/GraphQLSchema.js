const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
module.exports = buildSchema(`
  type Exercise {
    name: String
    movement: String
    type: String
    sets: Int
    reps: Int
  }

  type Query {
    chestExercise: Exercise
    legExercise: Exercise
    shoulderExercise: Exercise
    armExercise: Exercise
    backExercise: Exercise
  }
`);

