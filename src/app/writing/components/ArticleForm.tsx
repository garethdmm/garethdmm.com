import type { Post } from "@prisma/client";

import dynamic from "next/dynamic";
import React from "react";

import PostMetadata from "./PostMetadata";
import {
  ContainerInner,
  ContainerOuter,
  ProseContainer,
} from "@/components/layout";
import { CoverSelectInput, TitleInput } from "@/components/inputs";

const MarkdownEditorFormField = dynamic(
  () => import("../../../components/inputs/MarkdownEditorFormField"),
  { ssr: false }
);

interface ArticleFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  initialValues: Post;
}

export default function ArticleForm({
  onSubmit,
  initialValues,
}: ArticleFormProps) {
  return (
    <ContainerOuter>
      <ContainerInner className="bg-white border-2 mt-6">
        <ProseContainer>
          <form action={onSubmit}>
            <header className="flex flex-col mt-6 lg:mt-16 space-y-6">
              <TitleInput
                title={initialValues.title}
                className="text-5xl font-bold tracking tight block w-full resize-none border-0 border-transparent p-0 pb-4 text-zinc-800 placeholder:text-gray-400 focus:border-zinc-400 focus:border-b focus:ring-0"
              />
              <PostMetadata article={initialValues} />
              <CoverSelectInput cover={initialValues.cover} />
            </header>
            <div
              className="prose prose-xl mt-8 lg:mt-16 border-b-2 min-h-48"
              data-mdx-content
            >
              <MarkdownEditorFormField
                name="content"
                markdown={initialValues.content}
              />
            </div>
            <div className="mt-16 mb-24 px-8">
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
