const {
    ChestExercises,
    ArmExercises,
    BackExercises,
    ShoulderExercises,
    LegExercises
  } = require('../schemas/MongooseSchemas');

// The root provides a resolver function for each API endpoint
const rootResolvers = {
    chestExercise:  async () => {
      const [randomDocument] = await ChestExercises.aggregate([{ $sample: { size: 1 } }]);
      return randomDocument;
    },
    legExercise: async () => {
      const [randomDocument] = await LegExercises.aggregate([{ $sample: { size: 1 } }]);
      return randomDocument;
    },
    shoulderExercise: async () => {
      const [randomDocument] = await ShoulderExercises.aggregate([{ $sample: { size: 1 } }]);
      return randomDocument;
    },
    armExercise: async () => {
      const [randomDocument] = await ArmExercises.aggregate([{ $sample: { size: 1 } }]);
      return randomDocument;
    },
    backExercise: async () => {
      const [randomDocument] = await BackExercises.aggregate([{ $sample: { size: 1 } }]);
      return randomDocument;
    }
  };

  module.exports = {
      rootResolvers
  }