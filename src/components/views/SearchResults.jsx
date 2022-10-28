import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <div>Search results for {query}</div>
  );
};

export default SearchResults;
