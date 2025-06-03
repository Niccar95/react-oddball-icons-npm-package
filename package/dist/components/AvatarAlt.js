"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SvgAvatarAlt = function SvgAvatarAlt(props) {
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
      d: "M32 32c6.627 0 12-5.373 12-12S38.627 8 32 8s-12 5.373-12 12 5.373 12 12 12M16 42.2c0-9.6 32-9.6 32 0V55H16z"
    }),
    _react2["default"].createElement("path", {
      fill: "#fff",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M32 24c2.21 0 6.5-1.79 6.5-4s-4.29-4-6.5-4-6.5 1.79-6.5 4 4.29 4 6.5 4"
    }),
    _react2["default"].createElement("path", {
      fill: "#000",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M32 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    })
  );
};
exports["default"] = SvgAvatarAlt;
module.exports = exports["default"];