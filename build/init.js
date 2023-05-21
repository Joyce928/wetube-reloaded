"use strict";

require("dotenv/config");
require("./db");
require("./models/Video");
require("./models/User");
require("./models/Comment");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 4000;
var hnadleListening = function hnadleListening() {
  return console.log("\u2705\u2705\u2764Server listening on port http://localhost:".concat(PORT, "\uD83D\uDE80"));
};
_server["default"].listen(PORT, hnadleListening);