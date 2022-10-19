import { Switch } from "antd";

const ThemeSwitcher = ({ toggleThemes }) => (
  <Switch
    className="theme-switcher"
    checkedChildren="Light"
    unCheckedChildren="Dark"
    defaultChecked={true}
    onChange={toggleThemes}
  />
);

export default ThemeSwitcher;
