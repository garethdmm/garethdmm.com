import { type Post } from "@prisma/client";
import getReadingTime from "reading-time";
import formatDate from "@/lib/format_date";

export default function PostMetadata({ article }: { article: Post }) {
  const readTime = getReadingTime(article.content).text.replace(
    "min",
    "minute"
  );

  return (
    <div className="text-lg flex flex-row gap-x-4 text-zinc-600">
      <time dateTime={article.date.toDateString()}>
        {formatDate(article.date)}
      </time>
      |<span>{readTime}</span>
    </div>
  );
}
