const chalk = require("chalk");

function generateColorfulMessage(message, color) {
  return chalk[color](message);
}

module.exports = generateColorfulMessage;
