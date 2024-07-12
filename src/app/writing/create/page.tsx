import { Post } from "@prisma/client";
import { createPost } from "../actions";
import ArticleForm from "../components/ArticleForm";

export default function Create() {
  const initialValues = {
    cover: "",
    title: "",
    content: "",
    published: false,
    date: new Date(),
  } as Post;

  return <ArticleForm onSubmit={createPost} initialValues={initialValues} />;
}
