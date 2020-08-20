/// region imports
const { union } = require('lodash');
/// endregion

/**
 * exports employee collection
 * @module employee collection
 */
module.exports = async (dataSource) => {
  return union(await dataSource.getEmployees());
};
