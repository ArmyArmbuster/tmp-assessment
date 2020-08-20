/// region imports
const insertEmployees = require('../../service/insertEmployees');
const getEmployeeAnniversaries = require('../util/getEmployeeAnniversaries');
const getEmployeeCollection = require('../util/getEmployeeCollection');
const getEmployeeExclusions = require('../util/getEmployeeExclusions');
const generateWish = require('../util/generateWish');
/// endregion

const transmitWish = (wish) => {

  /// SEND EMAIL WITH NODE MAILER
  console.log(wish);

  return {
    message: wish,
    success: true,
    code: 'OK',
  };
};

const transmitNone = (none = 'No wishes today!') => {

  /// SEND EMAIL WITH NODE MAILER
  console.log(none);

  return {
    message: none,
    success: false,
    code: 'NA',
  };
};

/**
 * exports graphql schema resolver
 * @module graphql schema resolver
 */
module.exports = async function (_source, _args, { dataSources }) {

  /// graphql arguments
  const { message = process.env.ACME_MESSAGE, field = 'dateOfBirth', date = Date.now() } = _args;

  /// graphql context
  const { ACMEDataSource } = dataSources;

  /// obtain employee collections
  const employeeCollection = await getEmployeeCollection(ACMEDataSource);
  const employeeExclusions = await getEmployeeExclusions(ACMEDataSource);

  /// obtain employees
  const employees = getEmployeeAnniversaries(employeeCollection, employeeExclusions, field, new Date(date));

  if (employees.length) {

    /// obtain employees' wish
    const wish = generateWish(message, employees);

    /// insert employees wished
    await insertEmployees(employees.map((employee) => {
      return { _id: employee.id };
    }));

    return transmitWish(wish);
  } else {
    return transmitNone();
  }
};
