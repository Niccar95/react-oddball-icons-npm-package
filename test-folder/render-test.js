const React = require("react");
const ReactDOMServer = require("react-dom/server");
const oddballIcons = require("../package/dist");

const svgString = ReactDOMServer.renderToString(
  React.createElement(oddballIcons.Avatar)
);

console.log(svgString);
