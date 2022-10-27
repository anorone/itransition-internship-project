const collections = require('./temp/collections');
const items = require('./temp/items');
const last = require('lodash/last');

exports.handler = async (request) => {
  const [id] = last(request.path.split('/'));
  const collection = collections.find((coll) => coll.id === +id);
  const collectionItems = items.filter((item) => item.collection.id === +id);
  const result = { ...collection, items: collectionItems };
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
};
