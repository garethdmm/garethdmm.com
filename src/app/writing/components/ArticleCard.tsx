import { MDXRemote } from "next-mdx-remote/rsc";

import { type Post } from "@prisma/client";
import PostMetadata from "./PostMetadata";
import ArticleMenu from "./ArticleMenu";

export default async function ArticleCard({ article }: { article: Post }) {
  return (
    <div className="relative isolate flex flex-col gap-3 md:flex-row md:gap-8 group">
      <div className="flex flex-col gap-3 relative md:grow">
        <PostMetadata article={article} />
        <div className="md:order-first flex flex-row items-start">
          <h3 className="text-lg md:text-2xl leading-6 text-gray-900 grow">
            {article.title}
          </h3>
          <div className="relative isolate z-20 invisible group-hover:visible">
            <ArticleMenu article={article} />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="line-clamp-2 text-base leading-6 text-gray-600">
            <MDXRemote source={article.content} />
          </div>
        </div>
        <a
          href={`/writing/${article.id}`}
          className="underline hidden md:block"
        >
          <span className="absolute inset-0 z-10"></span>
          Read this
        </a>
      </div>
      <div className="grid grid-cols-3 gap-3 md:order-first md:block md:shrink-0 relative">
        <div className="col-span-1 flex flex-col gap-y-3 shrink-0">
          <img
            className="object-cover aspect-[4/3] md:w-64 border-2 rounded-sm"
            src={"/covers/" + article.cover}
            alt="stressed founder"
          />
          <a href={"/writing/" + article.id}>
            <span className="absolute inset-0"></span>
          </a>
        </div>
        <div className="col-span-2 md:hidden">
          {/**
           * The complex selector here is a workaround for line-clamp in ios <= 16, wherein the property
           * is applied to each child element directly, so we will end up with paragraphs*3 number of lines.
           */}
          <div className="line-clamp-3 text-xs leading-6 text-gray-600 [&>*]:hidden [&>*:first-child]:block">
            <MDXRemote source={article.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
