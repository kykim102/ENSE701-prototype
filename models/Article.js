const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "id",
  },
  author: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  journal: {
    type: String,
  },
  year: {
    type: String,
  },
  eprint: {
    type: String,
  },
  eprtinttype: {
    type: String,
  },
  eprintclass: {
    type: String,
  },
  volume: {
    type: String,
  },
  number: {
    type: String,
  },
  pages: {
    type: String,
  },
  month: {
    type: String,
  },
  annote: {
    type: String,
  },
});

module.exports = Article = mongoose.model("article", ArticleSchema);
