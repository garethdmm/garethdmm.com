import { FaArrowDown } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="relative container mx-auto isolate py-32">
      <div className="flex flex-row space-x-8 items-center justify-center">
        <img alt="My face" className="rounded-full w-32 h-32 " src="/me.png" />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
          Hi, I&apos;m Gareth
        </h1>
      </div>
      <p className="mt-6 mb-6 text-lg leading-8 text-gray-600 text-center max-w-xl mx-auto">
        I&apos;m an engineer and founder with deep experience growing startups.
      </p>
      <p className="mt-6 mb-6 text-lg leading-8 text-gray-600 text-center max-w-xl mx-auto">
        I&apos;ve built core security services at{" "}
        <span className="bg-cyan-500 text-white cursor-pointer px-0.5">
          Meta
        </span>
        , built my own startup,{" "}
        <span className="bg-orange-500 text-white cursor-pointer px-0.5">
          Tinker
        </span>
        , to profitability and over 1$ billion GMV. I&apos;ve also helped many
        others grow their own companies as a fractional CTO.
      </p>
      <p className="mt-6 mb-6 text-lg leading-8 text-gray-600 text-center max-w-xl mx-auto">
        If you&apos;re interested in working together, you can{" "}
        <span className="bg-blue-500 px-0.5 text-white cursor-pointer">
          connect
        </span>{" "}
        with me, or scroll to learn more about me. You can also{" "}
        <span className="bg-indigo-500 text-white cursor-pointer px-0.5">
          read
        </span>{" "}
        some of my writing.
      </p>
      <FaArrowDown className="h-24 w-24 mx-auto pt-12 animate-bounce-short" />
    </div>
  );
}
