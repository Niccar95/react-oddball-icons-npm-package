"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SvgPresentation = function SvgPresentation(props) {
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
      strokeWidth: 2,
      d: "M50 12H14a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2ZM32 36v16M32 52l-8 8M32 52l8 8"
    }),
    _react2["default"].createElement("path", {
      stroke: "#000",
      strokeDasharray: "1 3",
      strokeWidth: 2,
      d: "M20 20c4 0 4 4 8 4s4-4 8-4 4 4 8 4"
    })
  );
};
exports["default"] = SvgPresentation;
module.exports = exports["default"];