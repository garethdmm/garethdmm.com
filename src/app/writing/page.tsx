import { PrismaClient, type Post } from "@prisma/client";

import ArticleCard from "./components/ArticleCard";
import { Container } from "@/components/layout";

export default async function Writing() {
  const prisma = new PrismaClient();

  const articles = await prisma.post.findMany();

  return (
    <Container>
      <div className="mt-4 sm:mt-8">
        <div className="flex flex-col space-y-4 sm:space-y-16">
          {articles.map((article: Post) => {
            return <ArticleCard key={article.id} article={article} />;
          })}
        </div>
      </div>
    </Container>
  );
}
