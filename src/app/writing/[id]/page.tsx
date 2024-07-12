import { MDXRemote } from "next-mdx-remote/rsc";
import { PrismaClient } from "@prisma/client";

import PostMetadata from "../components/PostMetadata";
import ArticleMenu from "../components/ArticleMenu";
import { Container } from "@/components/Container";
import ProseContainer from "@/components/ProseContainer";

export default async function Post({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const prisma = new PrismaClient();

  const article = await prisma.post.findFirst({
    where: {
      id: id,
    },
  });

  if (!article) {
    return null;
  }

  return (
    <Container>
      <ProseContainer>
        <article>
          <header className="flex flex-col mt-6 lg:mt-16 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              {article.title}
            </h1>
            <div className="flex justify-between group">
              <PostMetadata article={article} />
              <ArticleMenu article={article} horizontal={true} />
            </div>
            <img src={"/covers/" + article.cover} alt="stressed founder" />
          </header>
          <div
            className="prose prose-xl mt-8 lg:mt-16 font-serif"
            data-mdx-content
          >
            <MDXRemote
              source={article.content}
              components={{
                img: (props) => (
                  <img className="mx-auto" {...props} alt={props.alt} />
                ),
              }}
            />
          </div>
          <div className="mt-16 px-8">
            <p className="text-4xl italic text-right font-serif text-gray-800">
              - g
            </p>
          </div>
        </article>
      </ProseContainer>
    </Container>
  );
}
