import { MDXRemote } from "next-mdx-remote/rsc";
import { PrismaClient } from "@prisma/client";

import formatDate from "@/lib/format_date";

export default async function Post({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const prisma = new PrismaClient();

  const article = await prisma.post.findFirst({
    where: {
      id: id,
    },
  });

  if (!article || !article.content) {
    return null;
  }

  return (
    <div className="flex w-full">
      <div className="relative flex w-full flex-col">
        <main className="flex-auto">
          <div className="sm:px-8 mt-16 lg:mt-32">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="xl:relative">
                    <div className="mx-auto max-w-2xl">
                      <article>
                        <header className="flex flex-col">
                          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                            {article.title}
                          </h1>
                          <time className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
                            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                            <span className="ml-3">
                              {article?.date
                                ? formatDate(article.date)
                                : "Undated"}
                            </span>
                          </time>
                          <img
                            className="mt-6"
                            src={"/" + article.cover}
                            alt="stressed founder"
                          />
                        </header>
                        <div className="prose prose-xl mt-8" data-mdx-content>
                          <MDXRemote source={article.content} />
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
