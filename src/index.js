import localesEn from "./locales-en";

/**
 * Creates a new Number to String object
 * @param {Object} param0
 * @param {Object} param0.locales - Custom list of strings
 */
function Fantas({ locales = null } = {}) {
  // assign custom locales or default (english)
  const _locales = locales || localesEn;

  /**
   * Convert a Number into a readable string
   * @param {String|Number} num
   * @returns {String} readable string
   */
  this.transform = function(num) {
    if (isNaN(num)) {
      throw new Error("Not a number.");
    }

    return "string";
  };

  return this;
}

export default Fantas;
