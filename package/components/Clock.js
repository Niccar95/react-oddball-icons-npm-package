const React = require("react");
const SvgClock = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M32 57c13.807 0 25-11.193 25-25S45.807 7 32 7 18 20 12.5 32C8.375 41 18.192 57 32 57M32 32V14M32 32l10 5"
    />
  </svg>
);
export default SvgClock;
