import fs from "fs";
import path from "path";
import { Post, PostMetadata } from "@/types";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "/posts");

export interface getPostOptions {
  slug: string;
}

export default async function getPost({ slug }: getPostOptions) {
  const postPath = path.join(postsPath, `${slug}.md`);
  if (!fs.existsSync(postPath)) {
    throw new Error("Not found");
  }
  const fileContents = await fs.promises.readFile(postPath, "utf8");
  const { data, content } = matter(fileContents);
  const { title, description, date, tags } = data as PostMetadata;
  return { slug, title, description, date, tags, content } as Post;
}
