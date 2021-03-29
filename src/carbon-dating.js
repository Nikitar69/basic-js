const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" ||
    sampleActivity <= 0 ||
    sampleActivity > MODERN_ACTIVITY ||
    isNaN(+sampleActivity)) {
    return false
  };
  let halfTime = 0.693 / HALF_LIFE_PERIOD
  let ageLog = Math.log(MODERN_ACTIVITY / sampleActivity) / halfTime
  return Math.ceil(ageLog)
};