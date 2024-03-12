import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

export default function Home() {
  return (
    <>
      <main className="divide-y-2 relative space-y-10">
        <div className="relative container mx-auto isolate py-32">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Gareth MacLeod
          </h1>
          <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
            I'm an engineer and founder with a long history in tech. I've
            written core security functions at Meta, engineered new payments
            workflows at the world's fastest growing trucking company, and built
            my own startup to $1m in daily GMV.
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
        <div className="container bg-gray-200 mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-[50%]"></div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  Lorem Ipsum
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">
                  Lorem Ipsum
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  Lorem Ipsum
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
              </div>
              <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">
                  Lorem Ipsum
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="py-4">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Interested in working together?
              </h1>
              <p className="mt-6 text-lg  text-gray-600 inline-flex">
                Give me a shout:
                <span className="inline-flex space-x-2 ml-2 items-baseline">
                  <FaLinkedin className="self-center" />
                  <MdOutlineMail className="self-center" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>copyright 2024</footer>
    </>
  );
}
