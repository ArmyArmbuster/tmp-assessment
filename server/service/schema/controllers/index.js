/**
 * exports graphql schema resolvers
 * @module graphql schema resolvers
 */
module.exports = {

  Query: {
    statsWishes () {
      return [];
    },
  },
  Mutation: {
    emailWishes () {
      return {
        message: 'OK',
        success: true,
        code: 'OK',
      };
    },
  },
  MutationResponse: {
    __resolveType () {
      return null;
    },
  },
};
