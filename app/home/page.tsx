import CareerTimeline from "./sections/timeline";
import AltTimeline from "./sections/alt_timeline";
import Conclusion from "./sections/conclusion";

export default function Home() {
  return (
    <>
      <main className="divide-y-2 relative space-y-10">
        <div className="relative container mx-auto isolate py-32">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Gareth MacLeod
          </h1>
          <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
            I&apos;m an engineer and founder with a long history in tech.
            I&apos;ve written core security functions at Meta, engineered new
            payments workflows at the world&apos;s fastest growing trucking
            company, and built my own startup to $1m in daily GMV.
          </p>
          <a
            href="#"
            className="mr-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Read my resume
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Read my writing <span aria-hidden="true">→</span>
          </a>
        </div>
        <AltTimeline />
        <Conclusion />
      </main>
      <footer className="py-2 px-4 text-sm">© 2024 Gareth Macleod</footer>
    </>
  );
}
