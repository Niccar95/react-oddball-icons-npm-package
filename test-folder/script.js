const oddballIcons = require("../package/dist");

console.log(
  oddballIcons.isOddBall
    ? oddballIcons.isOddBall("oddball")
    : "isOddBall function not found"
);

console.log(typeof oddballIcons.Avatar);
