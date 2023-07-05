export interface PostMetadata {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
}

export interface SimplePost {
  slug: string;
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
}

export interface Post extends SimplePost {
  content: string;
}
