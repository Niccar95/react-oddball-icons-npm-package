"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { "default": e };
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }return n;
  }, _extends.apply(null, arguments);
}
var SvgDocument = function SvgDocument(props) {
  return (/*#__PURE__*/_react["default"].createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      fill: "none",
      viewBox: "0 0 64 64"
    }, props), /*#__PURE__*/_react["default"].createElement("path", {
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16 12h28l8 8v28a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      stroke: "#000",
      strokeWidth: 2,
      d: "M44 12v8h8"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m32 12 4 8-6 8 4 8-6 8 4 8"
    }))
  );
};
var _default = exports["default"] = SvgDocument;