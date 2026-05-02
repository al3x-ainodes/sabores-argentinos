import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          white: '#FFFFFF',
          black: '#090909',
        },
        base: '#114B3A',
        primary: '#D03B4D',
        primaryDark: '#8E2F3A',
      },
      fontFamily: {
        'big-shoulders': ['Big Shoulders', 'sans-serif'],
        'instrument-serif': ['Instrument Serif', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
