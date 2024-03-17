/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#681B1E",
      },
      maxWidth: {
        container: "900px",
      },
    },
  },
  plugins: [],
}
