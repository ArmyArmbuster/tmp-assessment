/// region imports

/// endregion

/**
 * exports FAKEDataSource
 * @module FAKEDataSource
 */
module.exports = class {

  async setEmployees (employees) {
    this.employees = employees;
  }

  async getEmployees () {
    return this.employees || [];
  }
};
