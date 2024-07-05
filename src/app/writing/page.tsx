import { PrismaClient, type Post } from "@prisma/client";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Container } from "@/components/Container";
import PostMetadata from "./components/PostMetadata";

function Article({ article }: { article: Post }) {
  return (
    <div className="relative isolate flex flex-col gap-3 md:flex-row md:gap-8">
      <div className="flex flex-col gap-3 relative md:grow">
        <PostMetadata article={article} />
        <h3 className="text-xl md:text-2xl leading-6 text-gray-900 group-hover:text-gray-600 md:order-first">
          {article.title}
        </h3>
        <div className="hidden md:block">
          <div className="line-clamp-2 text-base leading-6 text-gray-600">
            <MDXRemote source={article.content} />
          </div>
        </div>
        <a
          href={`/writing/${article.id}`}
          className="underline hidden md:block"
        >
          <span className="absolute inset-0"></span>
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

export default async function Writing() {
  const prisma = new PrismaClient();

  const articles = await prisma.post.findMany();

  return (
    <main className="flex-auto">
      <Container>
        <header className="max-w-2xl mt-6 lg:mt-16 hidden md:block">
          <h1 className="text-4xl sm:text-5xl">My Writing</h1>{" "}
        </header>
        <div className="mt-6 sm:mt-20 md:pl-6">
          <div className="flex flex-col space-y-12">
            {articles.map((article) => {
              return <Article key={article.id} article={article} />;
            })}
          </div>
        </div>
      </Container>
    </main>
  );
}
