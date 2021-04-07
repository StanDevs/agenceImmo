const mongoose = require("mongoose");

const proprieteSchema = new mongoose.Schema({
  title: String,
  type: String,
  description: String,
  inSurface: Number,
  outSurface: Number,
  price: Number,
  isFurnished: Boolean,
  bilan: String,
  image: String,
});

const Propriete = mongoose.model("Propriete", proprieteSchema);

module.exports = { proprieteSchema, Propriete };
