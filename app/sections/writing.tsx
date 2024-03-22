const posts = [
  {
    id: 1,
    title: "How to feel when your startup feels easy",
    href: "https://garethdmm.com/how-to-feel-when-your-startup-feels-easy-1c40b0b4210a",
    description:
      "I did something hard once: I took my startup from zero to $1m in daily volume in 4 months. Something has bothered me ever since: it felt easy.",
    imageUrl: "/ease_post.webp",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "How we survived 5 years in the most dangerous market in the world.",
    href: "https://garethdmm.com/how-we-survived-5-years-in-the-most-dangerous-market-in-the-world-c1404e0ab5b9",
    description: "War stories from the early crypto days.",
    imageUrl: "/risk.png",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
];

export default function Writing() {
  return (
    <div id="writing" className="relative py-6 sm:py-24 iphonepromax:py-8">
      <div className="container mx-auto px-12 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16 text-center">
          Here&apos;s some of my writing.
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-20 lg:mx-0">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
