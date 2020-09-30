const mongoose = require("mongoose");

const ProceedingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
  },
  year: {
    type: Date.year,
  },
  month: {
    type: Date.month,
  },
});

module.exports = Proceeding = mongoose.model("proceeding", ProceedingSchema);
