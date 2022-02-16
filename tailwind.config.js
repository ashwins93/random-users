module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
    },
    extend: {
      colors: {
        raven: {
          500: "#7882A4",
          600: "#6c7594",
          400: "#808baf",
        },
        sand: "#C0A080",
      },
      boxShadow: {
        nue: "20px 20px 40px #666f8b, -20px -20px 40px #8a96bd",
        "nue-sm": "10px 10px 20px #666f8b, -10px -10px 20px #8a96bd",
        "nue-lg": "30px 30px 60px #666f8b, -30px -30px 60px #8a96bd",
      },
    },
  },
  plugins: [],
};
