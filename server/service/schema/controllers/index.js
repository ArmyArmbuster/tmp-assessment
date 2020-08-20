/// region imports
const statsWishes = require('./statsWishes');
const emailWishes = require('./emailWishes');
const clearWishes = require('./clearWishes');
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
    clearWishes,
  },
  MutationResponse: {
    __resolveType () {
      return null;
    },
  },
};
