module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist:[
    /^bg-/,
    /^to-/,
    /^from-/,
  ],
  darkMode:true,
  theme: {
    extend: {},
  },
  plugins: [],
};
