import { Button } from 'antd';

const LanguageSwitcher = ({ toggleLanguages }) => {
  const handleClick = (e) => {
    const value = e.target.textContent.toLowerCase();
    toggleLanguages(value);
  }

  return (
    <ul className="lang-switcher header__lang-switcher">
      <li className="lang-switcher__item">
        <Button className="lang-switcher__button" type="text" onClick={handleClick}>EN</Button>
      </li>
      <li className="lang-switcher__item">
        <Button className="lang-switcher__button" type="text" onClick={handleClick}>RU</Button>
      </li>
    </ul>
  );
};

export default LanguageSwitcher;
