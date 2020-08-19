/// region imports
require('dotenv').config();
const consola = require('consola');
const { config: app } = require('./app');
/// endregion

/// server
let server;

/**
 * create process handler
 */

process.on('unhandledRejection', () => {

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});

/**
 * create express service
 */

(
  async function () {

    /// ...
    let port = process.env.PORT || 3000;

    /// ...
    server = await app.listen(port);

    /// LOG
    consola.ready({
      message: `Server listening on http://localhost:${port}/graphql`,
      badge: true,
    });
  }
)();
