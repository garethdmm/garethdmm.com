import { FaArrowDown } from "react-icons/fa6";

export default function Cover() {
  return (
    <div
      id="cover"
      className="relative isolate py-6 sm:py-32 iphonepromax:pt-16"
    >
      <div className="container mx-auto px-12 text-left sm:text-center lg:px-8">
        <div className="flex flex-row items-center justify-center space-x-4 space-y-4">
          <img
            alt="My face"
            className="h-24 w-24 rounded-full sm:h-32 sm:w-32 "
            src="/me.png"
          />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hi, I&apos;m Gareth
          </h1>
        </div>
        <p className="mx-auto mb-6 mt-6 max-w-xl text-lg leading-8 text-gray-600">
          I&apos;m an engineer and founder with deep experience growing
          startups.
        </p>
        <p className="mx-auto mb-6 mt-6 max-w-xl text-lg leading-8 text-gray-600">
          I built my own startup, Tinker, to profitability and a billion dollars
          in volume, and have helped many others grow their companies as a lead
          or fractional CTO.
        </p>
        <p className="mx-auto mb-6 mt-6 max-w-xl text-lg leading-8 text-gray-600 sm:mb-16 iphonepromax:mb-16">
          If you&apos;d like to work with me, let&apos;s{" "}
          <a
            href="#contact"
            className="cursor-pointer bg-blue-500 px-0.5 text-white"
          >
            connect
          </a>{" "}
          at the links below, or{" "}
          <a
            href="https://garethdmm.medium.com/"
            target="_blank"
            className="cursor-pointer bg-cyan-500 px-0.5 text-white"
          >
            scroll
          </a>{" "}
          to learn more about me. You can also read some of my{" "}
          <a
            href="https://garethdmm.medium.com/"
            target="_blank"
            className="cursor-pointer bg-pink-500 px-0.5 text-white"
          >
            writing
          </a>
          .
        </p>
        <div className="mx-auto h-10 w-10 animate-bounce-short rounded-full bg-amber-50 p-2 text-gray-900 shadow-xl ring-1 ring-slate-500">
          <a href="#career">
            <FaArrowDown className="size-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
