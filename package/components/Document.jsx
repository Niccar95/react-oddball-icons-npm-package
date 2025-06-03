import React from 'react';
const SvgDocument = (props) => (
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
      d="M16 12h28l8 8v28a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z"
    />
    <path stroke="#000" strokeWidth={2} d="M44 12v8h8" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m32 12 4 8-6 8 4 8-6 8 4 8"
    />
  </svg>
);
export default SvgDocument;
