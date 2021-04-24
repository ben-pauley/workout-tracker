const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { Exercise, ExerciseSchema } = require("./exercise.js");

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },

    exercises: [
      {
        type: ExerciseSchema,
        default: Exercise,
      },
    ],
  },
  { toJSON: { virtuals: true } }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
