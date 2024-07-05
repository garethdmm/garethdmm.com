import { type Post } from "@prisma/client";
import getReadingTime from "reading-time";
import { formatDate, formatDateShort } from "@/lib/format_date";

export default function PostMetadata({ article }: { article: Post }) {
  const readTime = getReadingTime(article.content).text.replace(
    "min",
    "minute"
  );

  return (
    <div className="text-xs md:text-lg flex flex-row gap-x-4 text-zinc-600">
      <time dateTime={article.date.toDateString()}>
        <span className="md:hidden">{formatDateShort(article.date)}</span>
        <span className="hidden md:inline">{formatDate(article.date)}</span>
      </time>
      <span className="hidden md:inline">|</span>
      <span className="hidden md:inline">{readTime}</span>
    </div>
  );
}
