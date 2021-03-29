const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let current;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        current = this.calculateDepth(arr[i]) + 1;
      }
      if (depth < current) {
        depth = current;
      }
    }
    return depth;
  }
};