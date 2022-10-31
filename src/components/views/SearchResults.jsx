import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { List } from 'antd';
import Spinner from '../Spinner';
import getData from '../../utils/fetch';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const [isLoading, setLoadingStatus] = useState(true);
  const query = searchParams.get('query');

  useEffect(() => {
    setLoadingStatus(true);
    getData(`/.netlify/functions/search?query=${query}`, (results) => {
      setSearchResults(results);
      setLoadingStatus(false);
    });
  }, [query, setLoadingStatus]);

  const listItems = searchResults.map((item, i) => {
    const orderNumber = i + 1;
    const path = `/${item.type}/${item.id}`;
    return (
      <List.Item className="search-results__item">
        {orderNumber}. {item.name} <Link to={path}>{path}</Link>
      </List.Item>
    )
  });

  const searchResultsPage = (
    <section className="section search-results">
      <h1 className="sr-only">Search results</h1>
      <p className="search-results__message">
        <FormattedMessage id="main.search-results.message" />: {searchResults.length}
      </p>
      <List
        className="search-results__list"
        dataSource={listItems}
        renderItem={(item) => item}
        size="large"
      />
    </section>
  );

  return isLoading ? Spinner : searchResultsPage;
};

export default SearchResults;
