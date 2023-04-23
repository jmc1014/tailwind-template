// ./node_modules/tailwindcss/stubs/defaultConfig.stub.js
const extcolors = require("./js/theme/color");
// const utilities = require('../src/js/plugins/utilities');
// const variants = require('../src/js/plugins/variants');

module.exports = {
  content: ["./public/*.{html,js,php}"],
  prefix: "mtb-",
  theme: {
    extend: {
      colors: extcolors,
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
      },
    },
  },
  plugins: [],
};
