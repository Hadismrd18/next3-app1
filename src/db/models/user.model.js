import { Schema, model, models } from "mongoose";

const userModel = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: String,
  },
});

const User = models.User || model("User", userModel);

export default User;
