import { category } from "./category";
import { product } from "./product";
import { blog } from "./blog";
import { author } from "./author";

export const schema = {
  types: [product, category, blog, author],
};
