"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SvgCalculator = function SvgCalculator(props) {
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
      d: "M44 12H20a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4Z"
    }),
    _react2["default"].createElement("path", {
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M30 20h-8v8h8zM42 20h-8v8h8zM30 32h-8v8h8zM42.899 33.172 35.172 31.1l-2.07 7.727 7.727 2.071z"
    })
  );
};
exports["default"] = SvgCalculator;
module.exports = exports["default"];