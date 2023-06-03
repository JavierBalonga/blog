import axios from "axios";
import { PostsResponse } from "../../../app/api/posts/route";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default async function Posts() {
  const { data } = await api.get<PostsResponse>("/posts");

  return (
    <section className="flex flex-col gap-8 py-8">
      {data.posts.map((post) => (
        <div
          key={post.slug}
          className="flex flex-col gap-2 p-6 border-teal-50 border rounded-lg"
        >
          <h4 className="text-2xl">{post.title}</h4>
          <p>{post.description}</p>
          {post.date && <p>{new Date(post.date).toLocaleDateString()}</p>}
        </div>
      ))}
    </section>
  );
}
