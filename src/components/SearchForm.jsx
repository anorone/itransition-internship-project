import { Input } from 'antd';

const { Search } = Input;

const SearchForm = () => (
  <form className="search-form" method="GET" action="/search">
    <Search
      className="search-form__input"
      name="query"
      placeholder="books"
    />
  </form>
);

export default SearchForm;
