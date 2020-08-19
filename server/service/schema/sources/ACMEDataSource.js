/// region imports
const { RESTDataSource } = require('apollo-datasource-rest');
/// endregion

/**
 * exports RESTDataSource
 * @module RESTDataSource
 */
module.exports = class extends RESTDataSource {

  constructor () {
    super();
    this.baseURL = process.env.ACME;
  }

  async getBirthdayWishExclusions () {
    return this.get(process.env.ACME_BIRTHDAY_WISH_EXCLUSIONS);
  }

  async getEmployees () {
    return this.get(process.env.ACME_EMPLOYEES);
  }
};
