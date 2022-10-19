import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import SearchForm from './SearchForm';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__inner">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <SearchForm />
      </div>
    </div>
  </header>
);

export default Header;
