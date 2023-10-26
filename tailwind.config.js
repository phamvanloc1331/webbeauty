/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#111e22",
          "200": "#141414",
        },
        slategray: "#5c8692",
        lightslategray: "#7a9ca5",
        white: "#fff",
        dimgray: "#555",
        aliceblue: {
          "100": "#edf5f7",
          "200": "#ebf3f5",
        },
        darkgray: {
          "100": "#a2b3bf",
          "200": "#9bb7bf",
        },
        silver: "#c4c4c4",
        darkslategray: {
          "100": "#272d32",
          "200": "#1e2c30",
        },
        lightblue: "#95bfcb",
        lightgray: "#d3d3d3",
        azure: "#effcff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "playfair-display": "'Playfair Display'",
        manrope: "Manrope",
        "dm-sans": "'DM Sans'",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
        inherit: "inherit",
      },
    },
    fontSize: {
      "26xl": "45px",
      mini: "15px",
      lg: "18px",
      "9xl": "28px",
      sm: "14px",
      lgi: "19px",
      "51xl": "70px",
      "3xl": "22px",
      "7xl": "26px",
      xl: "20px",
      smi: "13px",
      mid: "17px",
      "21xl": "40px",
      base: "16px",
      "5xl": "24px",
      "36xl": "55px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
