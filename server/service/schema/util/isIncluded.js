/**
 * exports exclusions check function
 * @module exclusions check function
 */
module.exports = function (exclusions, id) {
  return !exclusions.includes(id);
};
