import { MDXRemote } from "next-mdx-remote/rsc";
import { PrismaClient } from "@prisma/client";

import { Container } from "@/components/Container";
import formatDate from "@/lib/format_date";

export default async function Post({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const prisma = new PrismaClient();

  const article = await prisma.post.findFirst({
    where: {
      id: id,
    },
  });

  if (!article || !article.content || !article.date) {
    return null;
  }

  return (
    <main className="flex-auto">
      <Container>
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col mt-6 lg:mt-16 space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  {article.title}
                </h1>
                <div className="text-lg flex flex-row gap-x-4 text-zinc-600">
                  <time dateTime={article.date.toDateString()}>
                    {formatDate(article.date)}
                  </time>
                  |<span>8 minute read</span>
                </div>
                <img src={"/" + article.cover} alt="stressed founder" />
              </header>
              <div className="prose prose-xl mt-8 lg:mt-16" data-mdx-content>
                <MDXRemote source={article.content} />
              </div>
            </article>
          </div>
        </div>
      </Container>
    </main>
  );
}
