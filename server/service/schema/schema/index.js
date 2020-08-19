/// region imports
const fs = require('fs');
const { gql } = require('apollo-server-express');
/// endregion

/**
 * exports graphql schema
 * @module graphql schema
 */
module.exports = gql(fs.readFileSync(__dirname.concat('/schema.graphql'), 'UTF-8'));
