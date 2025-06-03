"use strict";

var Avatar = require("./components/Avatar");
var AvatarAlt = require("./components/AvatarAlt");
var Calculator = require("./components/Calculator");
var Calender = require("./components/Calender");
var Clock = require("./components/Clock");
var Document = require("./components/Document");
var Envelope = require("./components/Envelope");
var Lock = require("./components/Lock");
var MagnifyingGlass = require("./components/MagnifyingGlass");
var Presentation = require("./components/Presentation");
var SpeechBubble = require("./components/SpeechBubble");
var SpeechBubbleAlt = require("./components/SpeechBubbleAlt");
var StapleDiagram = require("./components/StapleDiagram");
var StapleDiagramAlt = require("./components/StapleDiagramAlt");
var Suitcase = require("./components/Suitcase");

function isOddBall(string) {
  return string === "oddball";
}

module.exports = {
  isOddBall: isOddBall,
  Avatar: Avatar,
  AvatarAlt: AvatarAlt,
  Calculator: Calculator,
  Calender: Calender,
  Clock: Clock,
  Document: Document,
  Envelope: Envelope,
  Lock: Lock,
  MagnifyingGlass: MagnifyingGlass,
  Presentation: Presentation,
  SpeechBubble: SpeechBubble,
  SpeechBubbleAlt: SpeechBubbleAlt,
  StapleDiagram: StapleDiagram,
  StapleDiagramAlt: StapleDiagramAlt,
  Suitcase: Suitcase
};