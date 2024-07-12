import { PrismaClient } from "@prisma/client";
import dynamic from "next/dynamic";
import React from "react";

import { editPost } from "../../actions";
import PostMetadata from "../../components/PostMetadata";
import {
  ContainerInner,
  ContainerOuter,
  ProseContainer,
} from "@/components/layout";
import { CoverSelectInput, TitleInput } from "@/components/inputs";

const MarkdownEditorFormField = dynamic(
  () => import("../../../../components/inputs/MarkdownEditorFormField"),
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
  };

  return (
    <ContainerOuter>
      <ContainerInner className="bg-white border-2 mt-6">
        <ProseContainer>
          <form action={onSubmit}>
            <header className="flex flex-col mt-6 lg:mt-16 space-y-6">
              <TitleInput
                article={article}
                className="text-5xl font-bold tracking tight block w-full resize-none border-0 border-transparent p-0 pb-4 text-zinc-800 placeholder:text-gray-400 focus:border-zinc-400 focus:border-b focus:ring-0"
              />
              <PostMetadata article={article} />
              <CoverSelectInput article={article} />
            </header>
            <div className="prose prose-xl mt-8 lg:mt-16" data-mdx-content>
              <MarkdownEditorFormField
                name="content"
                markdown={article.content}
              />
            </div>
            <div className="mt-16 px-8">
              <p className="text-4xl italic text-right font-serif text-gray-800">
                - g
              </p>
            </div>
          </form>
        </ProseContainer>
      </ContainerInner>
    </ContainerOuter>
  );
}
