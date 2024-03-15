export default function ConclusionLeftRight() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Let&apos;s chat!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              If you&apos;re interested in working together, the quickest way to
              talk to me is book a meeting through my calendly. You can also
              find me at{" "}
              <span className="bg-cyan-500 text-white px-0.5 cursor-pointer">
                linkedin
              </span>
              ,{" "}
              <span className="bg-slate-500 text-white px-0.5 cursor-pointer">
                github
              </span>
              , or send me an{" "}
              <span className="bg-red-500 text-white px-0.5 cursor-pointer">
                email
              </span>
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
