/// region imports
const isAnniversary = require('./isAnniversary');
const isEmployed = require('./isEmployed');
const isIncluded = require('./isIncluded');
/// endregion

const formatEmployee = (employee, field) => {

  employee.employmentStartDate = new Date(employee.employmentStartDate);
  employee.employmentEndDate = new Date(employee.employmentEndDate);
  employee[`${field}`] = new Date(employee[`${field}`]);

  return employee;
};

/**
 * exports anniversary filter function
 * @module anniversary filter function
 */
module.exports = function (employees, exclusions, field, now = new Date()) {
  return employees
    /// format employee
    .map((employee) => formatEmployee(employee, field))
    /// filter employee dates
    .filter(({ employmentStartDate, employmentEndDate }) => isEmployed(employmentStartDate, employmentEndDate, now))
    /// filter employee exclusions
    .filter(({ id }) => isIncluded(exclusions, id))
    /// filter employee [field]
    .filter((employee) => isAnniversary(employee[`${field}`], now));
};
