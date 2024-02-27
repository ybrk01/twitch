/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        table: "0.5fr 2.5fr 5fr",
      },
    },
  },
  plugins: [],
};
