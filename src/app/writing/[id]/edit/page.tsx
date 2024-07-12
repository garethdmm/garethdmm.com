import { PrismaClient } from "@prisma/client";
import React from "react";

import { editPost } from "../../actions";
import ArticleForm from "../../components/ArticleForm";

export default async function EditPost({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const prisma = new PrismaClient();

  const article = await prisma.post.findFirst({
    where: {
      id: id,
    },
  });

  if (!article) {
    return null;
  }

  const onSubmit = async (formData: FormData) => {
    "use server";
    await editPost(id, formData);
  };

  return <ArticleForm onSubmit={onSubmit} initialValues={article} />;
}
