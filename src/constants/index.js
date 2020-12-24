const exerciseObject = {
  chest: [
    { id: 1, name: 'Barbell Bench Press', movement: 'compound', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 2, name: 'Push Ups', movement: 'compound', type: 'assistance', sets: 3, reps: 25, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 3, name: 'Chest Flies', movement: 'isolation', type: 'assistance', sets: 3, reps: 15, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 4, name: 'Incline Press', movement: 'compound', type: 'assistance', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 5, name: 'Dips', movement: 'compound', type: 'assistance', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 6, name: 'Dumbbell Bench Press', movement: 'compound', type: 'primary', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 7, name: 'Cable Crossovers', movement: 'isolation', type: 'assistance', sets: 3, reps: 15, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 8, name: 'Decline Barbell Bench Press', movement: 'compound', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
  ],
  legs: [
    { id: 1, name: 'Body Weight Squats', movement: 'compound', type: 'primary', sets: 3, reps: 25, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 2, name: 'Stiff Leg Deadlift', movement: 'compound', type: 'assistance', sets: 3, reps: 25, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 3, name: 'Leg Press', movement: 'compound', type: 'assistance', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 4, name: 'Lunges', movement: 'compound', type: 'assistance', sets: 3, reps: 15, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 5, name: 'Barbell Squat', movement: 'compound', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 6, name: 'Calf Raises', movement: 'isolation', type: 'assistance', sets: 3, reps: 25, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 7, name: 'Leg Extensions', movement: 'isolation', type: 'assistance', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 8, name: 'Leg Curl', movement: 'isolation', type: 'assistance', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
  ],
  shoulders: [
    { id: 1, name: 'Military Press', movement: 'compound', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 2, name: 'Seated Dumbbell Shoulder Press', movement: 'compound', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 3, name: 'Body Weight Squats', movement: 'compound', type: 'primary', sets: 3, reps: 25, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 4, name: 'Reverse Flies', movement: 'isolation', type: 'assistance', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 5, name: 'Shrugs', movement: 'compound', type: 'assistance', sets: 3, reps: 15, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 6, name: 'Front Raises', movement: 'isolation', type: 'assistance', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 7, name: 'Lateral Raises', movement: 'isolation', type: 'assistance', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 8, name: 'Push Press', movement: 'compound', type: 'primary', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },

  ],
  arms: [
    { id: 1, name: 'Barbell Curl', movement: 'isolation', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 2, name: 'Hammer Curl', movement: 'isolation', type: 'accessory', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 3, name: 'Dumbbell Curl', movement: 'isolation', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 4, name: 'Close Grip Bench Press', movement: 'compound', type: 'accessory', sets: 3, reps: 15, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 5, name: 'French Curls', movement: 'isolation', type: 'accessory', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 6, name: 'Cable Tricep Extension', movement: 'isolation', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 7, name: 'Preacher Curl', movement: 'isolation', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 8, name: 'Skull Crushers', movement: 'compound', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },

  ],
  back: [
    { id: 1, name: 'Bentover Barbell Row', movement: 'compound', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 2, name: 'Chin Ups', movement: 'compound', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 3, name: 'Lat Pull Down', movement: 'isolation', type: 'primary', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 4, name: 'Pullovers', movement: 'isolation', type: 'accessory', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 5, name: 'Bentover Dumbbell Row', movement: 'compound', type: 'accessory', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 6, name: 'Deadlifts', movement: 'compound', type: 'primary', sets: 5, reps: 5, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 7, name: 'Seated Cable Row', movement: 'isolation', type: 'accessory', sets: 3, reps: 10, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
    { id: 8, name: 'Face Pulls', movement: 'compound', type: 'accessory', sets: 3, reps: 12, superset: ({ bodyPart }) => new ExerciseClass(bodyPart) },
  ]
};

 class ExerciseClass {
  constructor(bodyPart) {
    this.exercises = exerciseObject[bodyPart]
  }

  getExercise() {
    return this.exercises[Math.floor(Math.random() * this.exercises.length)];
  }
};

module.exports = {
  ExerciseClass
}
