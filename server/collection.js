const collections = require('./temp/collections');
const last = require('lodash/last');

exports.handler = async (request) => {
  const [id] = last(request.path.split('/'));
  const collection = collections.find((coll) => coll.id === +id);
  return {
    statusCode: 200,
    body: JSON.stringify(collection),
  }
};
