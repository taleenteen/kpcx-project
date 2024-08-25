import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray1: '#E2E2E2',
        blue1: '#3e17ff',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 7))' }, // Adjust according to the number of slides
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      width: {
        'calc-250x14': 'calc(250px * 14)', // Adjust according to the number of slides
      },
    },
  },
  plugins: [],
};
export default config;
