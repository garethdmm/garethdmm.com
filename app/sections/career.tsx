"use client";

import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Experience from "@/app/components/Experience";
import { work_data } from "@/data/work_experience";

export default function Career() {
  return (
    <div id="career" className="py-6 sm:pb-16 iphonepromax:py-8">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 px-6 text-left text-3xl font-bold tracking-tight text-gray-900 sm:mb-16 sm:px-0 sm:text-4xl">
            Here&apos;s some of the work I&apos;ve done in the past.
          </h2>
        </div>
        <VerticalTimeline lineColor="#e2e8f0">
          {work_data.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={experience.time}
              contentArrowStyle={{ display: "none" }}
              contentStyle={{ background: "transparent", boxShadow: "none" }}
              iconStyle={{
                color: "#fff",
                background: "#fff",
                boxShadow: "none",
                WebkitBoxShadow: "none",
                ...experience.iconStyle,
              }}
              icon={experience.icon}
            >
              <Experience {...experience} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
