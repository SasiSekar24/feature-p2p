/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    // screens: {
    //   'xs': {'max': '350px'},
    //   'sm': {'max': '575px'},
    //   'md': {'max':'768px'},
    //   'lg': {'max':'960px'},
    //   'xl': {'max':'1200px'},
    //   'xl2': {'max':'1300px'},
    //   'xxl': {'max':'1400px'},
    //   'xxl2': {'max':'1600px'},
    //   'xxxl': {'max':'1920px'},
    // },
    screens: {
      xs: "350px",
      sm: "575px",
      md: "767px",
      lg: "960px",
      xl: "1200px",
      xl2: "1300px",
      xxl: "1400px",
      xxl2: "1600px",
      xxxl: "1920px",
    },
    extend: {
      fontFamily: {
        "noto-sans": ["NotoSans", "sans-serif"],
        "open-sans": ["OpenSans", "sans-serif"],
      },
      fontSize: {
        heading1: "36px",
        heading2: "30px",
        heading3: "24px",
      },
      backgroundColor: {
        primaryGrey: "#626060",
        primaryGrey2:"#c0c0c0",
        secondaryGrey: "#d3d3d3",
      },
      color:{
        errorRed:"#B91C1C",
        hrefColor:"#069",
      },
      borderColor: {
        lightWhite: "#f1f1f1",
      },
      margin: {
        'inherit': 'inherit',
      },
    },
    // backgroundColor:{
    //   primaryGrey: "#626060",
    //   secondaryGrey: "#d3d3d3",
    //   customGreen: "rgba(240, 253, 244, 0.3)"
    // },
    // borderColor:{
    //   lightWhite: "#f1f1f1"
    // },
    // colors: {
    //   red_500 : '#FF0000',
    // },
  },
  plugins: [],
};
