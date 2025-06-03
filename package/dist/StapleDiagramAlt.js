function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
var SvgStapleDiagramAlt = function SvgStapleDiagramAlt(props) {
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
    d: "M22 36h-8v16h8zM38 25h-8v24h8zM50 20h-8v32h8z"
  }));
};
export default SvgStapleDiagramAlt;