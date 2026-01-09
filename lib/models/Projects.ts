import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  projectName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String, required: true },
  deploymentLink: { type: String },
  githubLink: { type: String },
});

export const Project =
  models.Project || model("Project", ProjectSchema);
