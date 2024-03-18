"use client";

import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Experience from "@/app/components/Experience";

const data = [
  {
    key: 1,
    left: true,
    role: "Fractional CTO",
    place: "Various Startups",
    time: "2022 - 23",
    description:
      "I help teams from pre-seed to series B solve engineering or engineering management problems.",
    details: [
      "Deliver high-priority projects on a tight timeline when the existing team lacks bandwidth or specific expertise.",
      "Translate founder vision into engineering plans the team can execute on predictably. Add rigour to time estimation to increase team trust.",
      "Develop recruiting strategies. Advise on ideal team composition, candidate profiles and where to find them.",
    ],
    stack: [
      "Typescript",
      "Python",
      "Supabase",
      "Postgres",
      "Tailwind",
      "Chakra",
      "NextJS",
      "Express",
      "...more",
    ],
    icon: "🚀",
    iconStyle: {
      border: "2px solid gray",
      color: "#000",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "32px",
      display: "inline-flex",
    },
  },
  {
    key: 2,
    icon: <img alt="Truenorth" src="/truenorth.jpeg" />,
    left: false,
    role: "Payments Engineering Lead",
    place: "TrueNorth",
    time: "2020 - 21",
    stack: ["React", "Django", "Material UI", "GraphQL"],
    description:
      "Lead the effort to re-build the company’s payments workflows. The solutions I found lead to 4x revenue growth in three quarters and unlocked the company's Series B.",
    details: [
      "Diagnosed bottlenecks in existing payments workflows through user interviews and observed work processes between accounting and the large user operations teams. Identified information sharing within the ops team and data handoff between teams as key issues.",
      "Designed new features targeted at these issues. Built support internally for these changes by investing in personal relationships in the ops team, and highlighting the reduction in common stresses they experience.",
    ],
  },
  {
    key: 3,
    left: true,
    place: "Tinker",
    role: "CEO/Engineer",
    time: "2014 - 19",
    description: "Lead my team from idea to scale-up and profitability.",
    stack: ["Python", "Tensorflow", "Postgres", "RabbitMQ"],
    icon: <img alt="Tinker" src="/tinker.png" />,
    details: [
      "Built our proprietary trading engine from scratch to $2m daily transaction volume in only 8 months. Parts of this codebase are now [public on github](https://github.com/garethdmm/gryphon).",
      "Solved hard technical challenges to allow simultaneous high frequency trading on 20+ different venues, each with unpredictable response times and other API characteristics.",
      "Lead a team of 3 full-time engineers + contractors for legal, accounting, and design. Formulated company strategy with my co-founders, then translated those into quarterly priorities for each team member. Ran weekly planning, retrospectives, and 1:1’s.",
      "Turned hard compliance and regulatory challenges into strategic wins. Secured the only high-level partnership with a major Canadian bank in the industry, giving us access to high level financial services while competitors struggled to open chequing accounts.",
      "Designed successful risk mitigation strategies to security, counterparty, and asset price risks.",
      "Ran fundraising for our $2m seed round from YC, SVAngel and other prominent VCs.",
    ],
  },
  {
    key: 4,
    left: false,
    place: "Various Startups",
    role: "Founder",
    time: "2012 - 13",
    description:
      "Built a bunch of startups that didn't work. Learned a ton along the way.",
    stack: ["Python"],
    icon: <img alt="Matinee" src="/matinee.png" />,
    details: [
      "Ran user interviews to identify pain points. Built an MVP to test value props. Ran a sales strategy across online content-gen, paid ads, and in-person at film festivals. Market was too small so we wound down gracefully.",
    ],
  },
  {
    key: 5,
    left: true,
    place: "Facebook",
    role: "Software Engineer",
    time: "2011",
    description: "Built mission-critical security infrastructure",
    stack: ["C++", "ImageMagick"],
    icon: <img alt="Facebook" src="facebook.svg" />,
  },
  {
    key: 6,
    left: false,
    place: "University of Waterloo",
    time: "2006-2011",
    role: "Bachelor of Computer Science",
    description:
      "Canada's best tech university. Internships at AMD, OpenText, and multiple startups.",
    icon: <img alt="University of Waterloo" src="/waterloo.png" />,
  },
];

export default function Career() {
  return (
    <div className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl tracking-tight text-gray-900 text-center mb-1">
          My Career
        </h2>
        <p className="text-gray-600 text-center">(so far)</p>
      </div>
      <VerticalTimeline lineColor="#e2e8f0">
        {data.map((experience) => (
          <VerticalTimelineElement
            key={experience.key}
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
  );
}
