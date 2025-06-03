function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
var SvgSpeechBubbleAlt = function SvgSpeechBubbleAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 64 64"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "M10 16h44v28H26L16 54V44h-6z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeDasharray: "2 2",
    strokeWidth: 2,
    d: "M20 26h4m4 0h4m4 0h4"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeDasharray: "1 3",
    strokeWidth: 2,
    d: "M20 34h8m8 0h4"
  }));
};
export default SvgSpeechBubbleAlt;