import { PrismaClient } from "@prisma/client";
import dynamic from "next/dynamic";
import React from "react";

import { editPost } from "../../actions";
import { redirect } from "next/navigation";
import PostMetadata from "../../components/PostMetadata";

const MarkdownEditorFormField = dynamic(
  () => import("../../components/MarkdownEditorFormField"),
  { ssr: false }
);

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

    const previewUrl = `/blog/${id}`;
    redirect(previewUrl);
  };

  return (
    <form action={onSubmit}>
      <header className="flex flex-col mt-6 lg:mt-16 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {article.title}
        </h1>
        <PostMetadata article={article} />
        <img src={"/" + article.cover} alt="stressed founder" />
      </header>
      <div className="prose prose-xl mt-8 lg:mt-16" data-mdx-content>
        <MarkdownEditorFormField name="content" markdown={article.content} />
      </div>
      <div className="mt-16 px-8">
        <p className="text-4xl italic text-right font-serif text-gray-800">
          - g
        </p>
      </div>
    </form>
  );
}
