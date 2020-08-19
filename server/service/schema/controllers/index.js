/// region imports
const statsWishes = require('./statsWishes');
const emailWishes = require('./emailWishes');
/// endregion

/**
 * exports graphql schema resolvers
 * @module graphql schema resolvers
 */
module.exports = {

  Query: {
    statsWishes,
  },
  Mutation: {
    emailWishes,
  },
  MutationResponse: {
    __resolveType () {
      return null;
    },
  },
};
