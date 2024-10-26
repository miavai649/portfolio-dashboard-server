import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    mainContent: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Blog = model<TBlog>("Blog", blogSchema);
