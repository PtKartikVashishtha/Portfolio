const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0f2c",
        primary: "#2dd4bf",
        accent: "#06b6d4",
        text: "#f8fafc",
        card: "#112047",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
