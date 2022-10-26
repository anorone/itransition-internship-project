const items = require('./temp/items');
const last = require('lodash/last');

exports.handler = async (request) => {
  const [id] = last(request.path.split('/'));
  const item = items.find((item) => item.id === +id);
  return {
    statusCode: 200,
    body: JSON.stringify(item),
  }
};
