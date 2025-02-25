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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // fontFamily: {
      //   // kanit: ["var(--font-kanit)", "sans-serif"],
      //   sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      //   mono: ["var(--font-roboto-mono)", "monospace"],
      //   custom: ["var(--font-custom)", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
export default config;
