const Avatar = require("./components/Avatar");
const AvatarAlt = require("./components/AvatarAlt");
const Calculator = require("./components/Calculator");
const Calender = require("./components/Calender");
const Clock = require("./components/Clock");
const Document = require("./components/Document");
const Envelope = require("./components/Envelope");
const Lock = require("./components/Lock");
const MagnifyingGlass = require("./components/MagnifyingGlass");
const Presentation = require("./components/Presentation");
const SpeechBubble = require("./components/SpeechBubble");
const SpeechBubbleAlt = require("./components/SpeechBubbleAlt");
const StapleDiagram = require("./components/StapleDiagram");
const StapleDiagramAlt = require("./components/StapleDiagramAlt");
const Suitcase = require("./components/Suitcase");

function isOddBall(string) {
  return string === "oddball";
}

module.exports = {
  isOddBall,
  Avatar,
  AvatarAlt,
  Calculator,
  Calender,
  Clock,
  Document,
  Envelope,
  Lock,
  MagnifyingGlass,
  Presentation,
  SpeechBubble,
  SpeechBubbleAlt,
  StapleDiagram,
  StapleDiagramAlt,
  Suitcase,
};
