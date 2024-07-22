import { Post } from "@prisma/client";

export interface ArticleMenuProps {
  article: Post;
  horizontal?: Boolean;
}