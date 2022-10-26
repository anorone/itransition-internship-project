import { Button } from 'antd';

const LanguageSwitcher = ({ setLanguage }) => (
  <ul className="lang-switcher header__lang-switcher">
    <li className="lang-switcher__item">
      <Button className="lang-switcher__button" type="text" onClick={() => setLanguage('en')}>EN</Button>
    </li>
    <li className="lang-switcher__item">
      <Button className="lang-switcher__button" type="text" onClick={() => setLanguage('ru')}>RU</Button>
    </li>
  </ul>
);

export default LanguageSwitcher;
