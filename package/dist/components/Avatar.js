"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SvgAvatar = function SvgAvatar(props) {
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
      fill: "#000",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M26 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4M38 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    }),
    _react2["default"].createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M20 14c4-2 6 0 8 0"
    }),
    _react2["default"].createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M34 14h8"
    })
  );
};
exports["default"] = SvgAvatar;
module.exports = exports["default"];