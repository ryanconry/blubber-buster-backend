export const queryStrings: { [key: string]: string } = {
    Chest: `chestExercise {
      name,
      type,
      movement,
      sets,
      reps
    }`,
    Legs: `legExercise {
      name,
      type,
      movement,
      sets,
      reps
    }`,
    Back: `backExercise {
      name,
      type,
      movement,
      sets,
      reps
    }`,
    Arms: `armExercise {
      name,
      type,
      movement,
      sets,
      reps
    }`,
    Shoulders: `shoulderExercise {
      name,
      type,
      movement,
      sets,
      reps
    }`
  }

  export const responseToExerciseMap: { [key: string]: string } = {
    chestExercise: 'Chest',
    legExercise: 'Legs',
    backExercise: 'Back',
    armExercise: 'Arms',
    shoulderExercise: 'Shoulders'
  }

  export const exerciseTypes: string[] = ['Chest', 'Legs', 'Back', 'Arms', 'Shoulders'];

