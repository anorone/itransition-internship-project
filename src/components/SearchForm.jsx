import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
    setQuery('');
  };

  return (
    <form className="search-form" method="get" action="/search" onSubmit={handleFormSubmit}>
    <Input.Group>
      <Input
        className="search-form__input"
        name="query"
        placeholder="books"
        value={query}
        required
        style={{ width: 'calc(100% - 2rem)' }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className="search-form__button" icon={<SearchOutlined />} htmlType="submit" />
    </Input.Group>
    </form>
  );
};

export default SearchForm;
