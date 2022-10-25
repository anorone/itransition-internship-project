const { readFileSync } = require('fs');
const { join } = require('path');
const sortBy = require('lodash/sortBy');

const readJSON = (name) => {
  const path = join(__dirname, 'temp', `${name}.json`);
  return readFileSync(path);
};

const collections = JSON.parse(readJSON('collections'));
const items = JSON.parse(readJSON('items'));

exports.handler = async function (request) {
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
