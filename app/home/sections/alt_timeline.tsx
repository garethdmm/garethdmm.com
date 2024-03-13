"use client";

import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Experience from "@/app/components/Experience";
import HotelIcon from "@mui/icons-material/Hotel";
import { IoPeople } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

export default function AltTimeline() {
  return (
    <VerticalTimeline lineColor="#e2e8f0">
      <VerticalTimelineElement
        contentArrowStyle={null}
        contentStyle={{ background: "transparent", boxShadow: "none" }}
        position="left"
        date="2022 - 23"
        icon={"🚀"}
        iconStyle={{
          border: "2px solid gray",
          color: "#000",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          display: "inline-flex",
          background: "#fff",
          boxShadow: "none",
          WebkitBoxShadow: "none",
        }}
      >
        <Experience
          left={true}
          role="Fractional CTO"
          place="Various Startups"
          time="2022 - 23"
          description="I help teams from pre-seed to series B solve engineering or engineering management problems."
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - 2022"
        contentArrowStyle={null}
        contentStyle={{ background: "transparent", boxShadow: "none" }}
        iconStyle={{
          color: "#fff",
          background: "#fff",
          boxShadow: "none",
          WebkitBoxShadow: "none",
        }}
        icon={<img src="/truenorth_logo.jpeg" />}
      >
        <Experience
          left={false}
          role="Payments Engineering Lead"
          place="TrueNorth"
          time="2020 - 21"
          description="Lead the cross-functional effort to re-build the company’s AR and AP workflows, which were highly manual and were threatening growth at the time I arrived."
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014 - 2019"
        icon={<img src="/tinker-logo.png" />}
        iconStyle={{
          color: "#fff",
          background: "#fff",
          boxShadow: "none",
          WebkitBoxShadow: "none",
        }}
        contentStyle={{ background: "transparent", boxShadow: "none" }}
      >
        <Experience
          left={true}
          place="Tinker"
          role="CEO & Engineer"
          time="2014 - 19"
          description="Built my startup from nothing to billions in GMV."
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2012 - 13"
        iconStyle={{
          color: "#fff",
          background: "#fff",
          boxShadow: "none",
          WebkitBoxShadow: "none",
        }}
        contentStyle={{ background: "transparent", boxShadow: "none" }}
        icon={<img src="/matinee-logo.png" />}
      >
        <Experience
          left={false}
          place="Various Startups"
          role="Founder"
          time="2012 - 13"
          description="Built a bunch of startups that didn't work. Learned a lot along the way."
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2011"
        iconStyle={{
          color: "#fff",
          background: "#fff",
          boxShadow: "none",
          WebkitBoxShadow: "none",
        }}
        icon={<img src="facebook-logo.svg" />}
        contentStyle={{ background: "transparent", boxShadow: "none" }}
      >
        <Experience
          left={true}
          place="Facebook"
          role="Software Engineer"
          time="2011"
          description="Built mission-critical security infrastructure"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2006 - 2011"
        iconStyle={{
          color: "#fff",
          background: "#fff",
          boxShadow: "none",
          WebkitBoxShadow: "none",
        }}
        icon={<img src="/uw-logo.png" />}
        contentStyle={{ background: "transparent", boxShadow: "none" }}
      >
        <Experience
          left={false}
          place="University of Waterloo"
          role="Honours Computer Science"
        />
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
