import fs from "fs";
import path from "path";
import { PostMetadata, SimplePost } from "@/types";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "/_posts");

export interface PostsResponse {
  offset: number;
  limit: number;
  total: number;
  posts: SimplePost[];
}

interface GetPostsOptions {
  offset: number;
  limit: number;
}

export default async function getPosts({ offset, limit }: GetPostsOptions) {
  const fileNames = await fs.promises.readdir(postsPath, { encoding: "utf-8" });

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsPath, fileName);
      const fileContents = await fs.promises.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);
      const { title, description, date } = data as PostMetadata;
      return { slug, title, description, date };
    })
  );

  const sortedPosts = posts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    if (a.date > b.date) return 1;
    else if (a.date < b.date) return -1;
    else return 0;
  });

  return {
    offset,
    limit,
    total: sortedPosts.length,
    posts: sortedPosts.slice(offset, offset + limit),
  };
}
