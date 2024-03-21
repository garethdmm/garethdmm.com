import { FaArrowDown } from "react-icons/fa6";

export default function Cover() {
  return (
    <div className="relative isolate py-6 sm:py-32">
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
          I built my own startup, Tinker, to profitability and a billion dollars
          in volume, and have helped many others grow their companies as a lead
          or fractional CTO.
        </p>
        <p className="mt-6 mb-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto">
          If you&apos;d like to work with me, let&apos;s{" "}
          <a
            href="#contact"
            className="bg-blue-500 px-0.5 text-white cursor-pointer"
          >
            connect
          </a>{" "}
          at the links below, or you can scroll to learn more about me. You can
          also{" "}
          <a
            href="https://garethdmm.medium.com/"
            target="_blank"
            className="bg-indigo-500 text-white cursor-pointer px-0.5"
          >
            read
          </a>{" "}
          some of my writing.
        </p>
      </div>
      <div className="mx-auto p-2 w-10 h-10 ring-1 rounded-full ring-slate-500 shadow-xl bg-amber-50 text-gray-900 animate-bounce-short">
        <FaArrowDown className="size-6" />
      </div>
    </div>
  );
}
