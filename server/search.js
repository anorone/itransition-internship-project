const collections = require('./temp/collections');
const items = require('./temp/items');
const isObject = require('lodash/isObject');

const searchAll = (records, query) => {
  const onFilter = (record) => {
    const values = Object.values(record);
    return values.some((value) => {
      if (isObject(value)) {
        return onFilter(value);
      }
      return value.toString().toLowerCase().includes(query);
    });
  };
  return records.filter(onFilter);
};

exports.handler = async (request) => {
  const query = request.queryStringParameters.query.toLowerCase();
  const records = [...items, ...collections];
  const results = searchAll(records, query);
  return {
    statusCode: 200,
    body: JSON.stringify(results),
  }
};
