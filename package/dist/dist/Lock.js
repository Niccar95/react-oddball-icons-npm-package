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
var SvgLock = function SvgLock(props) {
  return (/*#__PURE__*/_react["default"].createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      fill: "none",
      viewBox: "0 0 64 64"
    }, props), /*#__PURE__*/_react["default"].createElement("path", {
      stroke: "#000",
      strokeWidth: 2,
      d: "M42 28H22a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2ZM24 28v-8a8 8 0 0 1 16 0"
    }))
  );
};
var _default = exports["default"] = SvgLock;