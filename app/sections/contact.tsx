import Script from "next/script";

export default async function Contact() {
  return (
    <div className="relative isolate" id="contact">
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
      <div className="container px-6 lg:px-8 mx-auto grid grid-cols-1 sm:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">
              Let&apos;s chat!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              If you&apos;re interested in working together, the quickest way to
              talk to me is book a meeting through my calendly, right here.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              You can also find me at{" "}
              <a
                href="https://www.linkedin.com/in/garethmacleod/"
                className="bg-cyan-500 text-white px-0.5 cursor-pointer"
              >
                linkedin
              </a>
              ,{" "}
              <a
                href="https://github.com/garethdmm"
                className="bg-slate-500 text-white px-0.5 cursor-pointer"
              >
                github
              </a>
              , or send me an{" "}
              <a
                className="bg-red-600 text-white px-0.5"
                href="mailto:gareth.macleod@gmail.com"
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
