export type CommunityFilters = {
  search?: string;
  orderBy?: "recent" | "members" | "name";
};

export type CommunityPostsFilters = {
  search?: string;
  tag?: string;
  orderBy?: "recent" | "popular";
};

export type CreateCommunityRequest = {
  name: string;
  slug: string;
  description?: string;
  coverImage?: string;
};
