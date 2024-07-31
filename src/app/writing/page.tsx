import { PrismaClient, type Post } from "@prisma/client";

import ArticleCard from "./components/ArticleCard";
import { Container, WritingFooter } from "@/components/layout";

export default async function Writing() {
  const prisma = new PrismaClient();

  const articles = await prisma.post.findMany();

  return (
    <div className="grow flex flex-col justify-between">
      <Container>
        <div className="mt-4 sm:mt-8">
          <div className="flex flex-col space-y-4 sm:space-y-16">
            {articles.map((article: Post) => {
              return <ArticleCard key={article.id} article={article} />;
            })}
          </div>
        </div>
      </Container>
      <Container>
        <WritingFooter />
      </Container>
    </div>
  );
}
