/// region imports
const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema');
const ACMEDataSource = require('./schema/sources/ACMEDataSource');
const FAKEDataSource = require('./schema/sources/FAKEDataSource');
/// endregion

/**
 * graphql schema context
 */
const context = async ({ req }) => {

  if (req) {
    return {

      /// ...
    };
  }
};

/**
 * graphql schema data sources
 */
const dataSources = () => ({
  ACMEDataSource: new ACMEDataSource(),
  FAKEDataSource: new FAKEDataSource(),
});

/**
 * exports service configuration
 * @module service configuration
 */
module.exports = new ApolloServer({ ...schema, context, dataSources });
