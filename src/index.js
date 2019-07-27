import localesEn from "./locales-en";

/**
 * Creates a new Number to String object
 * @param {Object} param0
 * @param {Object} param0.locales - Custom list of strings
 */
function Fantas({ locales = null, fixed = 5 } = {}) {
  /**
   * Settings
   *
   * assign custom locales or default (english)
   * create decimals mask
   */
  const _locales = locales || localesEn;
  // _decimals_mask = 000000
  const _decimals_mask = Array(fixed)
    .fill("0")
    .join("");

  /**
   * Convert a Number into a readable string
   * @param {String|Number} num
   * @returns {String} readable string
   */
  this.transform = function(num) {
    /**
     * Not A Number
     */
    if (isNaN(num)) {
      throw new Error(_locales.NaN);
    }

    /**
     * Negative
     */
    let negative = "";
    if (num < 0) {
      negative = _locales.negative + " ";
    }

    /**
     * Continue with absolute value
     */
    num = Math.abs(num);

    /**
     * Infinity
     */
    if (num === Number.POSITIVE_INFINITY) {
      return negative + _locales.infinity;
    }

    /**
     * Out of range
     */
    if (num > 2 * Math.pow(10, 15)) {
      return "Out of range";
    }

    /**
     * Floor
     */
    let floor = [];
    const num_floor = Math.floor(num);
    if (num_floor === 0) {
      floor.push(_locales[0]);
    } else {
      for (var k = 0; k <= 5; k++) {
        (function(num_period) {
          if (num_floor >= num_period) {
            // 2645724 => 724
            // 5009712 => 712
            // 24      => 24
            // 100000  => 0
            // 100002  => 2
            const block = Math.floor(num_floor / num_period) % 1000;
            if (block !== 0) {
              const block_ones = block % 10;
              const block_tens = block % 100;
              const block_hundreds = Math.floor(block / 100);

              if (k > 0) {
                floor.unshift(_locales["K" + k]);
              }

              if (block_tens) {
                if (_locales[block_tens]) {
                  /**
                   * Exact match for tens space
                   * locales = {
                   *   12: 'twelve'
                   * }
                   */
                  floor.unshift(_locales[block_tens]);
                  // Add AND
                  if (block_hundreds || (num_period === 1 && num_floor >= 1000))
                    floor.unshift(_locales.and);
                } else {
                  floor.unshift(
                    (block_tens >= 10
                      ? _locales[Math.floor(block_tens / 10) + "X"]
                      : "") +
                      (block_tens >= 10 && block_ones ? "-" : "") +
                      (block_ones ? _locales[block_ones] : "")
                  );
                  // Add AND
                  if (block_hundreds || (num_period === 1 && num_floor >= 1000))
                    floor.unshift(_locales.and);
                }
              }

              if (block_hundreds) {
                floor.unshift(_locales[block_hundreds] + " " + _locales.C);
              }
            }
          }
        })(Math.pow(1000, k));
      }
    }

    /**
     * Decimals
     */
    let decimals = "";
    const num_decimals = num % 1;
    if (num_decimals !== 0) {
      // 0.65322 => '65322'
      // 0.65300 => '653'
      // 0.60022 => '60022'
      // 0.60200 => '602'
      // 0.00200 => '002'
      const first_n_decimals = (
        _decimals_mask + Math.round(num_decimals * Math.pow(10, fixed))
      ).substr(-fixed, fixed);

      const first_n_decimals_string = first_n_decimals.replace(
        /([^0]*)(0+)$/,
        "$1"
      );

      decimals =
        " " +
        _locales.point +
        " " +
        first_n_decimals_string
          .split("")
          .map(n => _locales[n])
          .join(" ");
    }

    return negative + floor.join(" ") + decimals;
  };

  return this;
}

export default Fantas;
