import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

export default function Conclusion() {
  return (
    <div id="conclusion" className="py-4">
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
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/gareth-macleod/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          ></script>
        </div>
      </div>
    </div>
  );
}
