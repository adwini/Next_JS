module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
  ],
  daisyui: {
    themes: ["night"],
  },
  // theme: {
  //   extend: {},
  // },
  plugins: [require("daisyui")],
};
