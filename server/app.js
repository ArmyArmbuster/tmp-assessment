/// region imports
const express = require('express');
const service = require('./service');
/// endregion

/// create express
const config = express();

/// create service middleware
service.applyMiddleware({ app: config });

/**
 * exports express configuration
 * @module express configuration
 */
module.exports = { config };
