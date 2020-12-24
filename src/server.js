var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const exerciseObject = {
    chest: [
        { id: 1, name: 'Bench Press', type: 'compound', sets: 3, reps: 10 },
        { id: 2, name: 'Push Ups', type: 'compound', sets: 3, reps: 25 },
        { id: 3, name: 'Chest fly', type: 'isolation', sets: 3, reps: 15 }
    ],
    leg: [
        { id: 1, name: 'Body Weight Squats', type: 'compound', sets: 3, reps: 25 },
        { id: 2, name: 'Stiff Leg Deadlift', type: 'isolation', sets: 3, reps: 25 }
    ]
}


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type ExerciseClass {
    getExercise: Exercise
  }

  type Exercise {
    id: Int
    name: String
    type: String
    sets: Int
    reps: Int
  }

  type Query {
    exercise(bodyPart: String): ExerciseClass 
  }
`);

class Exercise {
    constructor(bodyPart) {
        this.exercises = exerciseObject[bodyPart]
    }

    getExercise() {
        return this.exercises[Math.floor(Math.random() * this.exercises.length)];
    }
}

// The root provides a resolver function for each API endpoint
var root = {
    exercise: ({bodyPart}) => {
        return new Exercise(bodyPart)
    },
    // getLegExercise: () => {
    //     return new Exercise('leg')
    // }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');