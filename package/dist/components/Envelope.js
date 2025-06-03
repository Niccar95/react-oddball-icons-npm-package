"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SvgEnvelope = function SvgEnvelope(props) {
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
      d: "M48 20H16a2 2 0 0 0-2 2v8.5l3.5 3-1 2.5-1 2.5 2.5 3c0 1.105-1.105 2.5 0 2.5h30a2 2 0 0 0 2-2V22a2 2 0 0 0-2-2Z"
    }),
    _react2["default"].createElement("path", { stroke: "#000", strokeWidth: 2, d: "m14 20 18 14 18-14" })
  );
};
exports["default"] = SvgEnvelope;
module.exports = exports["default"];