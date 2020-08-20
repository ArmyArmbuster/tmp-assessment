/// region imports
const handle = require('./handle');
/// endregion

/**
 * exports handle for insert employees
 * @module handle for insert employees
 */
module.exports = async function () {

  return await handle(async function (collection) {
    return await collection.find();
  });
};
