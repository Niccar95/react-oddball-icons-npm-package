const React = require("react");
const SvgStapleDiagram = (props) => (
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
      strokeWidth={2}
      d="M46 35h-6v16h6zM34 11h-6v24h6zM22 19h-6v16h6zM12 35h40"
    />
  </svg>
);
export default SvgStapleDiagram;
