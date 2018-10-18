import { Model, model, Schema } from "mongoose";
import { IPostModel } from "../interfaces/postModel";

export const PostSchema: Schema = new Schema({
    body: String,
    published: Boolean,
    title: String,
  }, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
  });

export const Post: Model<IPostModel> = model<IPostModel>("Post", PostSchema);
