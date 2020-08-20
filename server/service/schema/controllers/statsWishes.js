/// region imports
const selectEmployees = require('../../service/selectEmployees');
/// endregion

/**
 * exports graphql schema resolver
 * @module graphql schema resolver
 */
module.exports = async function () {

  return selectEmployees();
};
