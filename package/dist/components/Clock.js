"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SvgClock = function SvgClock(props) {
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M32 57c13.807 0 25-11.193 25-25S45.807 7 32 7 18 20 12.5 32C8.375 41 18.192 57 32 57M32 32V14M32 32l10 5"
    })
  );
};
exports["default"] = SvgClock;
module.exports = exports["default"];