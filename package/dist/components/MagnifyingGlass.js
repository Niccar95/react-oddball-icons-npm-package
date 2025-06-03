"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SvgMagnifyingGlass = function SvgMagnifyingGlass(props) {
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
      d: "M28 40c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12ZM38 38l14 14"
    }),
    _react2["default"].createElement("path", {
      stroke: "#000",
      strokeWidth: 2,
      d: "m33.324 18.054-5.156 3.21.511 4.643L23 29.054"
    })
  );
};
exports["default"] = SvgMagnifyingGlass;
module.exports = exports["default"];