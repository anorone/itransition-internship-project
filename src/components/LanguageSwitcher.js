import { Button } from 'antd';

const LanguageSwitcher = () => (
  <ul className="lang-switcher">
    <li className="lang-switcher__item">
      <Button className="lang-switcher__button" type="text">EN</Button>
    </li>
    <li className="lang-switcher__item">
      <Button className="lang-switcher__button" type="text">RU</Button>
    </li>
  </ul>
);

export default LanguageSwitcher;
