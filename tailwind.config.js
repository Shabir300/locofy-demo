/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "rgba(0, 0, 0, 0.87)",
        orange: "#f99a0e",
        gray: {
          "100": "#8e8e94",
          "200": "rgba(0, 0, 0, 0.6)",
          "300": "rgba(0, 0, 0, 0.23)",
          "400": "rgba(255, 255, 255, 0.2)",
        },
        whitesmoke: "#eaeaea",
        saddlebrown: "#99600a",
        peru: "#9e6104",
        "primary-contrast": "#fff",
        slategray: "#576074",
        darkslategray: {
          "100": "#434343",
          "200": "#424242",
          "300": "#303030",
        },
        cornflowerblue: {
          "100": "#4dabff",
          "200": "#1262af",
          "300": "#1262ae",
        },
        gainsboro: {
          "100": "#e0e0e0",
          "200": "rgba(226, 226, 226, 0.1)",
        },
        lavender: "#ccdcec",
        darkgray: "#999",
        gold: "#fdbf00",
        lightgray: "#cecece",
        silver: "#bdbdbd",
        dimgray: "#616161",
        skyblue: "#99d2f5",
      },
      fontFamily: {
        "components-button-large": "Roboto",
        "baloo-bhai": "'Baloo Bhai'",
      },
      borderRadius: {
        "10xs": "3px",
        "4xl-2": "23.2px",
        "5xs-5": "7.5px",
        xs: "12px",
        "28xl-8": "47.8px",
      },
    },
    fontSize: {
      mini: "0.94rem",
      xs: "0.75rem",
      "sm-5": "0.84rem",
      "xs-2": "0.7rem",
      "3xl-4": "1.4rem",
      "base-5": "1.03rem",
      xl: "1.25rem",
      "3xl": "1.38rem",
      "4xl-9": "1.49rem",
      "9xl-4": "1.78rem",
      "2xs-5": "0.66rem",
      "mid-9": "1.12rem",
      "3xs-7": "0.61rem",
      "4xs": "0.56rem",
    },
    screens: {
      lg: {
        max: "1440px",
      },
      md: {
        max: "768px",
      },
      sm: {
        max: "428px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
