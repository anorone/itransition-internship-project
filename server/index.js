const collections = require('./temp/collections');
const items = require('./temp/items');
const sortBy = require('lodash/sortBy');

exports.handler = async (request) => {
  const { queryStringParameters: { from, limit } } = request;
  if (from === 'items') {
    const result = sortBy(items, (item) => Date.parse(item.createdOn)).reverse();
    return {
      statusCode: 200,
      body: JSON.stringify(result.slice(0, limit)),
    };
  }
  if (from === 'colls') {
    const result = sortBy(collections, 'volume').reverse();
    return {
      statusCode: 200,
      body: JSON.stringify(result.slice(0, limit)),
    };
  }
};
