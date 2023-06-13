export interface PostsResponse {
  data: Post[];
  meta: {
    pagination: Pagination;
  };
}

export interface Post {
  id: number;
  attributes: PostAttributes;
}

export interface PostAttributes {
  slug: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
