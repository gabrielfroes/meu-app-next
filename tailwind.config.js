const tailWindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern:
        /from-(red|yellow|green|purple|blue)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /to-(red|yellow|green|purple|blue)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = tailWindConfig;
