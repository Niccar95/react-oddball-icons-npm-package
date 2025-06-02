const React = require("react");
const SvgStapleDiagramAlt = (props) => (
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
      d="M22 36h-8v16h8zM38 25h-8v24h8zM50 20h-8v32h8z"
    />
  </svg>
);
export default SvgStapleDiagramAlt;
