import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["var(--font-noto-sans-jp)", "sans-serif"], // Use the variable here
      },
      colors: {
        'light-red': '#D51A16',
        'dark-red': '#B81122',
      },
    },
  },
} satisfies Config;