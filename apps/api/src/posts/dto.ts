export type CreatePostRequest = {
  title: string;
  content: string;
  summary?: string;
  tags?: string[];
  authorId: string;
  communityId: string;
};
