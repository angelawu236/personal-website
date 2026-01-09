import { Schema, model, models } from "mongoose";

const ExperienceSchema = new Schema({
  company: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String, required: true },
});

export const Experience =
  models.Experience || model("Experience", ExperienceSchema);
