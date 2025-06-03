"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SvgSuitcase = function SvgSuitcase(props) {
  return _react2["default"].createElement(
    "svg",
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      fill: "none",
      viewBox: "0 0 64 64"
    }, props),
    _react2["default"].createElement("path", {
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M46 20H18a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V24a4 4 0 0 0-4-4ZM24 20v-6h16v6M14 34h36M23.776 48.105 22.05 53.64l-5.596 5.245M45.306 59.5l-2.309-7.286L39.306 48"
    }),
    _react2["default"].createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m45.108 59.564 2.78-1.127M16 59l2.725 1.255"
    })
  );
};
exports["default"] = SvgSuitcase;
module.exports = exports["default"];