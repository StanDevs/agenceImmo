import mongoose from "mongoose";

export const proprieteSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  bilan: String,
  isFurnished: String,
});

export const Propriete = mongoose.model("Propriete", proprieteSchema);
