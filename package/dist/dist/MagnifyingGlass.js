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
var SvgMagnifyingGlass = function SvgMagnifyingGlass(props) {
  return (/*#__PURE__*/_react["default"].createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      fill: "none",
      viewBox: "0 0 64 64"
    }, props), /*#__PURE__*/_react["default"].createElement("path", {
      stroke: "#000",
      strokeWidth: 2,
      d: "M28 40c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12ZM38 38l14 14"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      stroke: "#000",
      strokeWidth: 2,
      d: "m33.324 18.054-5.156 3.21.511 4.643L23 29.054"
    }))
  );
};
var _default = exports["default"] = SvgMagnifyingGlass;