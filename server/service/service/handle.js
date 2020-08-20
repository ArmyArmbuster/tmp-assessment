/// region imports
const Realm = require('realm');
/// endregion

/**
 * exports MongoDB collection handle
 * @module MongoDB collection handle
 */
module.exports = async function (fn) {

  let user;

  try {

    /// application
    const app = new Realm.App({
      id: process.env.MONGO_ID,
      timeout: 10000,
    });

    /// required authentication
    user = await app.logIn(Realm.Credentials.anonymous());

    /// required collection
    const collection = user.remoteMongoClient(process.env.MONGO_SERVICE).db(process.env.MONGO_DATABASE).collection(process.env.MONGO_COLLECTION);

    return await fn(collection);

  } finally {
    await user.logOut();
  }
};
