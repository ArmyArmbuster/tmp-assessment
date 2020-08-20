/// region imports
const isAnniversary = require('./isAnniversary');
const isEmployed = require('./isEmployed');
const isIncluded = require('./isIncluded');
/// endregion

/**
 * exports anniversary filter function
 * @module anniversary filter function
 */
module.exports = function (employees, exclusions, field, now = new Date()) {
  return employees
    /// filter employee dates
    .filter(({ employmentStartDate, employmentEndDate }) => isEmployed(employmentStartDate, employmentEndDate, now))
    /// filter employee exclusions
    .filter(({ id }) => isIncluded(exclusions, id))
    /// filter employee [field]
    .filter((employee) => isAnniversary(employee[`${field}`], now));
};
