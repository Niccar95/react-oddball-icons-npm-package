const React = require("react");
const SvgCalculator = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M44 12H20a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4Z"
    />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M30 20h-8v8h8zM42 20h-8v8h8zM30 32h-8v8h8zM42.899 33.172 35.172 31.1l-2.07 7.727 7.727 2.071z"
    />
  </svg>
);
export default SvgCalculator;
