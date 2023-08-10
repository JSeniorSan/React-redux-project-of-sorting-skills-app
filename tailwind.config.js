/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        large: "1440px",
      },
      backgroundImage: {
        "first-svg": "url('/images/bg-header-desktop.svg')",
        "second-svg": "url('/images/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
};
