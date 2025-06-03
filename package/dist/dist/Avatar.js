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
var SvgAvatar = function SvgAvatar(props) {
  return (/*#__PURE__*/_react["default"].createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      fill: "none",
      viewBox: "0 0 64 64"
    }, props), /*#__PURE__*/_react["default"].createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M32 32c6.627 0 12-5.373 12-12S38.627 8 32 8s-12 5.373-12 12 5.373 12 12 12M16 42.2c0-9.6 32-9.6 32 0V55H16z"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      fill: "#000",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M26 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4M38 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M20 14c4-2 6 0 8 0"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M34 14h8"
    }))
  );
};
var _default = exports["default"] = SvgAvatar;