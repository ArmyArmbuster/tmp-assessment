const isEmployedStartDate = (employmentStartDate, now = new Date()) => {
  return (employmentStartDate.getTime() !== 0) && (employmentStartDate < now);
};

const isEmployedEndDate = (employmentEndDate, now = new Date()) => {
  return (employmentEndDate.getTime() === 0) || (employmentEndDate > now);
};

/**
 * exports employment date check function
 * @module employment date check function
 */
module.exports = function (employmentStartDate, employmentEndDate, now = new Date()) {
  return isEmployedStartDate(employmentStartDate, now) && isEmployedEndDate(employmentEndDate, now);
};
