import Script from "next/script";

export default async function Contact() {
  return (
    <div
      id="contact"
      className="relative isolate py-6 sm:py-0 iphonepromax:py-12"
    >
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
      <div className="container mx-auto grid grid-cols-1 px-6 sm:grid-cols-2 lg:px-8">
        <div className="relative px-6 pb-12 pt-16 sm:pt-32 lg:static lg:px-8 lg:py-48 iphonepromax:pt-0">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              And here&apos;s where to find me.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 iphonepromax:mt-16">
              I am occasionally available for fractional or full-time roles.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              If you&apos;d like to work together, the easiest way to find me is
              to book some time through my calendly, right here.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              You can also find me at{" "}
              <a
                href="https://www.linkedin.com/in/garethmacleod/"
                className="cursor-pointer bg-cyan-500 px-0.5 text-white"
                target="_blank"
              >
                linkedin
              </a>
              ,{" "}
              <a
                href="https://github.com/garethdmm"
                className="cursor-pointer bg-slate-500 px-0.5 text-white"
                target="_blank"
              >
                github
              </a>
              , or send me an{" "}
              <a
                className="bg-red-600 px-0.5 text-white"
                href="mailto:gareth.macleod@gmail.com"
                target="_blank"
              >
                email
              </a>
              .
            </p>
          </div>
        </div>
        <div
          className="calendly-inline-widget px-6 lg:px-8"
          data-url="https://calendly.com/gareth-macleod/30min?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    </div>
  );
}
