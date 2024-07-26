const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar")],
};
