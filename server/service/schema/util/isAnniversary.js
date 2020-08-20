const isLeapYear = (year) => {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
};

const checkEqualMonth = (date, now = new Date()) => {
  /// simple equality
  return (date.getMonth() === now.getMonth());
};

const checkEqualDay = (date, now = new Date()) => {
  /// simple equality and leap year check
  return (date.getDay() === now.getDay()) || (!isLeapYear(now.getFullYear()) && date.getDay() === 29 && now.getDay() === 28);
};

/**
 * exports anniversary date check function
 * @module anniversary date check function
 */
module.exports = function (date, now = new Date()) {
  return checkEqualMonth(date, now) && checkEqualDay(date, now);
};
