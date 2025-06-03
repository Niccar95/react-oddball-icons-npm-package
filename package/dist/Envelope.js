function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
var SvgEnvelope = function SvgEnvelope(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 64 64"
  }, props), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "M48 20H16a2 2 0 0 0-2 2v8.5l3.5 3-1 2.5-1 2.5 2.5 3c0 1.105-1.105 2.5 0 2.5h30a2 2 0 0 0 2-2V22a2 2 0 0 0-2-2Z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "m14 20 18 14 18-14"
  }));
};
export default SvgEnvelope;