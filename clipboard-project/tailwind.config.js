module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern-desktop": "url('/images/bg-header-desktop.png')",
        "hero-pattern-mobile": "url('/images/bg-header-mobile.png')",
      },
    },
  },
  plugins: [],
};
