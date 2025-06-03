import React from 'react';
const SvgSpeechBubble = (props) => (
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
      d="M10 12h44v28H20L10 50V12Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 34 3-6 3 6 3-6 3 6 3-6"
    />
  </svg>
);
export default SvgSpeechBubble;
