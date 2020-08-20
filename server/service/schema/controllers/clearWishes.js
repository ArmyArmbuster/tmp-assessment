/// region imports
const deleteEmployees = require('../../service/deleteEmployees');
/// endregion

/**
 * exports graphql schema resolver
 * @module graphql schema resolver
 */
module.exports = async function (_source, _args, { dataSources }) {

  /// delete
  await deleteEmployees();

  return {
    message: 'deleted',
    success: true,
    code: 'OK',
  };
};
