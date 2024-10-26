import { TImageFile } from "../../interfaces/file.interface";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogIntoDb = async (payload: TBlog, image: TImageFile) => {
  if (image && image.path) {
    payload.coverImage = image.path;
  }

  const post = await Blog.create(payload);
  return post;
};

const getAllBlogsFromDb = async () => {
  const result = await Blog.find();
  return result;
};

export const BlogServices = {
  createBlogIntoDb,
  getAllBlogsFromDb,
};
