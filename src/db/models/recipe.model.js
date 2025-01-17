import { Schema, model, models } from "mongoose";

const recipeModel = new Schema({
  name: {
    type: String,
  },
  instructions: {
    type: String,
  },
  prepMinutes: {
    type: String,
  },
  rating: {
    type: String,
  },
});

const Recipe = models.Recipe || model("Recipe", recipeModel);

export default Recipe;
