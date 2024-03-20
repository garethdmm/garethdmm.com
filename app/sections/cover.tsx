import { FaArrowDown } from "react-icons/fa6";

export default function Cover() {
  return (
    <div className="relative isolate py-24 sm:py-32">
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
          I built my own startup, Tinker, to profitability and over a billion
          dollars in volume, and helped many others grow their own companies in
          early stages as a Fractional CTO.
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
