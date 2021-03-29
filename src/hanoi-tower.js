const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(/* disksNumber, turnsSpeed */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let movesTowin = {};
  movesTowin.turns = 2 ** disksNumber - 1;
  movesTowin.seconds = Math.floor((movesTowin.turns * 3600) / turnsSpeed);
  return movesTowin;
};