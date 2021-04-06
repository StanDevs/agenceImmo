const mongoose = require("mongoose");

const proprieteSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  bilan: String,
  isFurnished: String,
});

const Propriete = mongoose.model("Propriete", proprieteSchema);

module.exports = {proprieteSchema, Propriete};

