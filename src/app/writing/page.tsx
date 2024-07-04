import { PrismaClient, type Post } from "@prisma/client";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Container } from "@/components/Container";
import formatDate from "@/lib/format_date";
import PostMetadata from "./components/PostMetadata";

function Article({ article }: { article: Post }) {
  return (
    <div className="relative isolate flex flex-col gap-8 lg:flex-row ">
      <div className="relative max-w-64 lg:shrink-0">
        <img
          className="object-cover aspect-[4/3]"
          src={"/" + article.cover}
          alt="stressed founder"
        />
        <a href={`/writing/${article.id}`}>
          <div className="absolute inset-0"></div>
        </a>
      </div>
      <div className="flex flex-col gap-y-3 relative">
        <h3 className="text-2xl leading-6 text-gray-900 group-hover:text-gray-600">
          {article.title}
        </h3>
        <PostMetadata article={article} />
        <div className="line-clamp-2 text-md leading-6 text-gray-600">
          <MDXRemote source={article.content} />
        </div>
        <a href={`/writing/${article.id}`} className="underline">
          <span className="absolute inset-0"></span>
          Read this
        </a>
      </div>
    </div>
  );
}

export default async function Writing() {
  const prisma = new PrismaClient();

  const articles = await prisma.post.findMany();

  return (
    <main className="flex-auto">
      <Container>
        <header className="max-w-2xl mt-6 lg:mt-16">
          <h1 className="text-4xl sm:text-5xl">My Writing</h1>
        </header>
        <div className="mt-16 sm:mt-20 pl-6">
          <div className="flex flex-col space-y-16">
            {articles.map((article) => {
              return <Article key={article.id} article={article} />;
            })}
          </div>
        </div>
      </Container>
    </main>
  );
}
