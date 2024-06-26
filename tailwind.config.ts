import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Monospace"],
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        "bounce-short": "bounce 1s ease-in-out 3 forwards",
      },
      colors: {
        beach: "#dfcc98",
      },
      screens: {
        iphonepromax: { raw: "(min-height: 739px) and (max-width:640px)" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;