import { FaArrowDown } from "react-icons/fa6";

export default function Cover() {
  return (
    <div className="relative isolate py-24 sm:py-32">
      <div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu blur-3xl overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="relative aspect-[1155/678] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 rotate-[30deg] left-[50%]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="container mx-auto px-12 lg:px-8 text-left sm:text-center">
        <div className="flex flex-row space-y-4 items-center justify-center space-x-4">
          <img
            alt="My face"
            className="rounded-full w-24 h-24 sm:w-32 sm:h-32 "
            src="/me.png"
          />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hi, I&apos;m Gareth
          </h1>
        </div>
        <p className="mt-6 mb-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto">
          I&apos;m an engineer and founder with deep experience growing
          startups.
        </p>
        <p className="mt-6 mb-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto">
          I&apos;ve built core security services at{" "}
          <span className="bg-cyan-500 text-white cursor-pointer px-0.5">
            Meta
          </span>
          , built my own startup,{" "}
          <a
            href="#tinker"
            className="bg-orange-500 text-white cursor-pointer px-0.5"
          >
            Tinker
          </a>
          , to profitability and over 1$ billion GMV. I&apos;ve also helped many
          others grow their own companies as a fractional CTO.
        </p>
        <p className="mt-6 mb-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto">
          If you&apos;re interested in working together, you can{" "}
          <a
            href="#contact"
            className="bg-blue-500 px-0.5 text-white cursor-pointer"
          >
            connect
          </a>{" "}
          with me at the links below, or scroll to learn more about me. You can
          also{" "}
          <a
            href="https://garethdmm.com/"
            className="bg-indigo-500 text-white cursor-pointer px-0.5"
          >
            read
          </a>{" "}
          some of my writing.
        </p>
      </div>
      <FaArrowDown className="h-24 w-24 mx-auto pt-12 animate-bounce-short" />
    </div>
  );
}
