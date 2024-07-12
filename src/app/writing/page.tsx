import { PrismaClient, type Post } from "@prisma/client";

import ArticleCard from "./components/ArticleCard";
import { Container } from "@/components/Container";

export default async function Writing() {
  const prisma = new PrismaClient();

  const articles = await prisma.post.findMany();

  return (
    <Container>
      <header className="max-w-2xl mt-6 lg:mt-16 hidden md:block">
        <h1 className="text-4xl sm:text-5xl">My Writing</h1>{" "}
      </header>
      <div className="mt-6 sm:mt-20 md:pl-6">
        <div className="flex flex-col space-y-12">
          {articles.map((article: Post) => {
            return <ArticleCard key={article.id} article={article} />;
          })}
        </div>
      </div>
    </Container>
  );
}
