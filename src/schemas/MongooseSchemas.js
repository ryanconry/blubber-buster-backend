const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Generic schema that all db documents will follow
const exerciseSchema = new Schema({
  name: String,
  type: String,
  movement: String,
  sets: Number,
  reps: Number
})


// Mongoose.model will automatically format first parameter, third parameter hardcodes collection name
// https://stackoverflow.com/a/7722490
const ChestExercises = mongoose.model('Chest', exerciseSchema, 'Chest');
const ArmExercises = mongoose.model('Arms', exerciseSchema, 'Arms');
const BackExercises = mongoose.model('Back', exerciseSchema, 'Back');
const ShoulderExercises = mongoose.model('Shoulders', exerciseSchema, 'Shoulders');
const LegExercises = mongoose.model('Legs', exerciseSchema, 'Legs');

module.exports = {
  ChestExercises,
  ArmExercises,
  BackExercises,
  ShoulderExercises,
  LegExercises
}