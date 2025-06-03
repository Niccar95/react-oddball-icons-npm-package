import React from 'react';
const SvgPresentation = (props) => (
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
      d="M50 12H14a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2ZM32 36v16M32 52l-8 8M32 52l8 8"
    />
    <path
      stroke="#000"
      strokeDasharray="1 3"
      strokeWidth={2}
      d="M20 20c4 0 4 4 8 4s4-4 8-4 4 4 8 4"
    />
  </svg>
);
export default SvgPresentation;
