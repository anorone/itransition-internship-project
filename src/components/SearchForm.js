import { Input } from 'antd';
const { Search } = Input;

const SearchForm = () => (
  <form className="search-form">
    <Search
      className="search-form__input"
      placeholder="books"
    />
  </form>
);

export default SearchForm;
