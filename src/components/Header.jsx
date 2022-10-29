import { Link } from 'react-router-dom';
import { HomeFilled } from '@ant-design/icons';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import SearchForm from './SearchForm';

const Header = ({ toggleThemes, toggleLanguages }) => (
  <header className="header">
    <div className="container">
      <div className="header__inner">
        <Link className="header__link" to="/">
          <HomeFilled className="header__icon" />
        </Link>
        <LanguageSwitcher toggleLanguages={toggleLanguages} />
        <ThemeSwitcher toggleThemes={toggleThemes} />
        <SearchForm />
      </div>
    </div>
  </header>
);

export default Header;
