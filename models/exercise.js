const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    trim: true,
    required: "Please enter an exercise name.",
  },
  duration: {
    type: Number,
    default: 0.0,
  },
  weight: {
    type: Number,
    default: 0.0,
  },
  reps: {
    type: Number,
    default: 0,
  },
  sets: {
    type: Number,
    default: 0,
  },
  distance: {
    type: Number,
    default: 0.0,
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = {
  Exercise,
  ExerciseSchema,
};
