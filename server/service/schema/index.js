/// region imports
const resolvers = require('./controllers');
const typeDefs = require('./schema');
/// endregion

/**
 * exports graphql schema
 * @module graphql schema
 */
module.exports = { resolvers, typeDefs };
