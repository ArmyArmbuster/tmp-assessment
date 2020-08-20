/**
 * exports generator for wish
 * @module generator for wish
 */
module.exports = (message, employees) => {
  return `${message.trim()}' '${employees.map((employee) => employee.name).join(', ')}`;
};
