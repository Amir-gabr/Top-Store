/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        // => @media (min-width: 640px) { ... }

        md: "728px",
        // => @media (min-width: 768px) { ... }

        lg: "970px",
        // => @media (min-width: 1024px) { ... }

        xl: "1220px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1460px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
