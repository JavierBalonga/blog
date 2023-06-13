import QueryString from "qs";
import { PostsResponse } from "../types";

const { CMS_URL, CMS_TOKEN } = process.env;

export interface GetPostsOptions {
  offset: number;
  limit: number;
}

export default async function getPosts({ offset, limit }: GetPostsOptions) {
  const query = QueryString.stringify(
    {
      pagination: {
        start: offset,
        limit: limit,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  console.log(query);

  const postsResponse = await fetch(`${CMS_URL}/api/posts`, {
    headers: {
      Authorization: `Bearer ${CMS_TOKEN}`,
    },
  });

  const data = (await postsResponse.json()) as PostsResponse;

  return data;
}
