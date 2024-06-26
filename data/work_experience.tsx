
export const work_data = [
  {
    left: true,
    role: "Fractional CTO",
    place: "Various Startups",
    time: "2022 - 23",
    description:
      "I help teams from pre-seed to series-B solve engineering or management challenges.",
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
      "NextJS",
    ],
    icon: <>🚀</>,
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
    icon: <img alt="Truenorth" src="/truenorth.jpeg" />,
    left: false,
    role: "Payments Engineering Lead",
    place: "TrueNorth",
    time: "2020 - 22",
    stack: ["React", "Django", "Material UI", "GraphQL"],
    description:
      "Led the effort to re-build the company's struggling payments workflows. The solutions I found unlocked 4x growth over three quarters and the company's series B.",
    details: [
      "Took ownership of the AR/AP workflow problem, which was known to be blocking growth, but poorly defined as it crossed team boundaries",
      "Built relationships and trust with each team through empathy and responsiveness, learned their challenges through user interviews and observation.",
      "Developed a strategy that balanced teams’ different requirements against engineering feasibility to focus on low hanging fruit first, then build 100x scalability afterwards.",
      "GMV went from stagnant to growing 4.5x over three quarters after after these new workflow entered use",
      "Advised the CTO on recruiting pipelines and team composition. Had a direct hand in signing 3 senior-level hires from FAANG companies.",
    ],
  },
  {
    id: "tinker",
    left: true,
    place: "Tinker",
    role: "CEO/Engineer",
    time: "2014 - 19",
    description:
      "Tinker was the first professional blockchain HFT firm and the largest trader in the industry. I led the team from idea through to profitability, acquisition offers, and billions of dollars of trades.",
    stack: ["Python", "Tensorflow", "Postgres", "RabbitMQ"],
    icon: <img alt="Tinker" src="/tinker.png" />,
    details: [
      <>
        Built our proprietary trading engine from scratch to $2m daily
        transaction volume in only 8 months. Parts of this codebase are now{" "}
        <a
          href="https://github.com/garethdmm/gryphon"
          className="bg-slate-700 px-0.5 text-white"
        >
          public on github
        </a>
        .
      </>,
      "Solved hard technical challenges to allow simultaneous high frequency trading on 20+ different venues, each with unpredictable response times and other API characteristics.",
      "Led a team of 3 full-time engineers + contractors for legal, accounting, and design.",
      "Turned hard compliance and regulatory challenges into strategic wins. Secured the only high-level partnership with a major Canadian bank in the industry, giving us access to high level financial services while competitors struggled to open chequing accounts.",
      "Designed successful risk mitigation strategies to security, counterparty, and asset price risks.",
      "Ran fundraising for our $2m seed round from YC, SVAngel and other prominent VCs.",
    ],
  },
  {
    left: false,
    place: "Matinée & Other Startups",
    role: "Founder",
    time: "2012 - 13",
    description:
      "My team and I built a bunch of product ideas that didn't work, but we learned a ton along the way.",
    stack: ["Python", "Bootstrap", "Javascript"],
    icon: <img alt="Matinee" src="/matinee.png" />,
  },
  {
    left: true,
    place: "Facebook",
    role: "Software Engineer",
    time: "2011",
    description:
      "I built Facebook's ReCaptcha clone, which served 10^8 requests per day for most of a decade.",
    stack: ["C++", "PHP"],
    icon: <img alt="Facebook" src="facebook.svg" />,
  },
  {
    left: false,
    place: "University of Waterloo",
    time: "2006 - 11",
    role: "Bachelor of Computer Science",
    icon: <img alt="University of Waterloo" src="/waterloo.png" />,
  },
];
