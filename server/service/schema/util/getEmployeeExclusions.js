/// region imports
const { union } = require('lodash');
const selectEmployees = require('../../service/selectEmployees');
/// endregion

/**
 * exports employee collection
 * @module employee collection
 */
module.exports = async (dataSource) => {
  return union(await dataSource.getExclusions(), await selectEmployees());
};
