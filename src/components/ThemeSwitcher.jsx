import { FormattedMessage } from 'react-intl';
import { Switch } from 'antd';

const ThemeSwitcher = ({ toggleThemes }) => (
  <Switch
    className="theme-switcher"
    checkedChildren=<FormattedMessage id="header.theme-switcher.light" />
    unCheckedChildren=<FormattedMessage id="header.theme-switcher.dark" />
    defaultChecked={true}
    onChange={toggleThemes}
  />
);

export default ThemeSwitcher;
