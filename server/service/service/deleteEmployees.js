/// region imports
const handle = require('./handle');
/// endregion

/**
 * exports handle for delete employees
 * @module handle for delete employees
 */
module.exports = async function () {

  return await handle(async function (collection) {
    return await collection.deleteMany();
  });
};
