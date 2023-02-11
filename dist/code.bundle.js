/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// jsx -> createElement
const element = /*#__PURE__*/React.createElement("div", null, "babel test"); // preset-react

// template-literals -> concat
const text = "element type is ".concat(element.type); // plugin-transform-template-literals

// arrow-functions -> normal func
const add = function (a, b) {
  return a + b;
}; // plugin-transform-arrow-functions
/******/ })()
;