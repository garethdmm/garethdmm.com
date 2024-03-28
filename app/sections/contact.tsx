import Script from "next/script";

export default async function Contact() {
  return (
    <div
      id="contact"
      className="relative isolate pb-24 pt-6 sm:pt-24 iphonepromax:pt-12"
    >
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
      <div className="container mx-auto mb-12 max-w-7xl md:mb-0">
        <div className="max-w-xl px-12">
          <h2 className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            And here&apos;s where to find me.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            If you&apos;d like to work together, the easiest way to find me is
            to book some time through my calendly, right here.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-900">
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
      <div className="container mx-auto px-6 md:px-0">
        <div
          className="calendly-inline-widget hidden lg:block"
          data-url="https://calendly.com/gareth-macleod/30min?hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "750px" }}
        ></div>
        <div
          className="calendly-inline-widget rounded-lg
          border-[1px] border-[#1a1a1a1a] bg-white p-[2px] shadow md:rounded-none md:border-none md:bg-transparent md:p-0 md:shadow-none lg:hidden"
          data-url="https://calendly.com/gareth-macleod/30min?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "750px" }}
        ></div>
      </div>
    </div>
  );
}
