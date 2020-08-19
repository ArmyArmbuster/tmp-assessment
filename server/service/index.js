/// region imports
const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema');
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
 * exports service configuration
 * @module service configuration
 */
module.exports = new ApolloServer({ ...schema, context });
