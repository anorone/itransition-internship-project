import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import SearchForm from './SearchForm';

const Header = ({ toggleThemes }) => (
  <header className="header">
    <div className="container">
      <div className="header__inner">
        <LanguageSwitcher />
        <ThemeSwitcher toggleThemes={toggleThemes} />
        <SearchForm />
      </div>
    </div>
  </header>
);

export default Header;
