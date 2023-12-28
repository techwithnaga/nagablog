/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // borderRadius: {
    //   full: "50%",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        white: "#ffffff",
        softBgColor: "#f5f5f5",
        cinchyRed: "#ffe2e0",
        cinchyGreen: "#00232c",
      },
    },
  },
  plugins: [],
};
