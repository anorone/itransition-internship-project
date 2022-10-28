import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/search?query=${query}`);
      setQuery('');
    }
  };

  return (
    <form className="search-form" method="get" action="/search" onSubmit={(e) => e.preventDefault()}>
      <Input.Search
        className="search-form__input"
        name="query"
        placeholder="books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
    </form>
  );
};

export default SearchForm;
