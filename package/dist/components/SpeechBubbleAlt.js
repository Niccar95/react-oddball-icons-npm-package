"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SvgSpeechBubbleAlt = function SvgSpeechBubbleAlt(props) {
  return _react2["default"].createElement(
    "svg",
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      fill: "none",
      viewBox: "0 0 64 64"
    }, props),
    _react2["default"].createElement("path", { stroke: "#000", strokeWidth: 2, d: "M10 16h44v28H26L16 54V44h-6z" }),
    _react2["default"].createElement("path", {
      stroke: "#000",
      strokeDasharray: "2 2",
      strokeWidth: 2,
      d: "M20 26h4m4 0h4m4 0h4"
    }),
    _react2["default"].createElement("path", {
      stroke: "#000",
      strokeDasharray: "1 3",
      strokeWidth: 2,
      d: "M20 34h8m8 0h4"
    })
  );
};
exports["default"] = SvgSpeechBubbleAlt;
module.exports = exports["default"];