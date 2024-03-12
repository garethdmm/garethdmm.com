import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //sunshine: '#fbfcdb',
        //dusk: '#e9defa',
        //sunshine: '#fddb92',
        //dusk: '#d1fdff',
        sunshine: '#fdfcfb',
        dusk: '#e2d1c3',
      }
    },
  },
  plugins: [],
};
export default config;

//background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);

// background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);