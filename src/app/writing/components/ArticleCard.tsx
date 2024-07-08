import { MDXRemote } from "next-mdx-remote/rsc";
import { type Post } from "@prisma/client";

import PostMetadata from "./PostMetadata";
import ArticleMenu from "./ArticleMenu";

export default function ArticleCard({ article }: { article: Post }) {
  return (
    <div className="relative isolate flex flex-col gap-3 md:flex-row md:gap-8 group">
      <div className="flex flex-col gap-3 relative md:grow">
        <PostMetadata article={article} />
        <div className="md:order-first flex flex-row items-start">
          <h3 className="text-xl md:text-2xl leading-6 text-gray-900 grow">
            {article.title}
          </h3>
          <ArticleMenu article={article} />
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
            className="object-cover aspect-[4/3] md:w-64"
            src={"/" + article.cover}
            alt="stressed founder"
          />
          <a href={"/writing/" + article.id}>
            <span className="absolute inset-0"></span>
          </a>
        </div>
        <div className="col-span-2 md:hidden">
          <div className="line-clamp-3 text-sm leading-6 text-gray-600">
            <MDXRemote source={article.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
