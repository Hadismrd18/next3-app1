import { Schema, model, models } from "mongoose";

const postModel = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  views: {
    type: String,
  }
});

const Post = models.Post || model("Post", postModel);

export default Post;
