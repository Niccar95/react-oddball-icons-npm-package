"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgPresentation = function SvgPresentation(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 64 64"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#000",
    strokeWidth: 2,
    d: "M50 12H14a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2ZM32 36v16M32 52l-8 8M32 52l8 8"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#000",
    strokeDasharray: "1 3",
    strokeWidth: 2,
    d: "M20 20c4 0 4 4 8 4s4-4 8-4 4 4 8 4"
  }));
};
var _default = exports["default"] = SvgPresentation;