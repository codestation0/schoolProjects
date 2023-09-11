/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-10": "#609513",
        "primary-20": "#34a853",
        "primary-30": "#ccffcc",
        gray: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
