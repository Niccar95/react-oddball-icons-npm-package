function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
var SvgCalculator = function SvgCalculator(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 64 64"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M44 12H20a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M30 20h-8v8h8zM42 20h-8v8h8zM30 32h-8v8h8zM42.899 33.172 35.172 31.1l-2.07 7.727 7.727 2.071z"
  }));
};
export default SvgCalculator;