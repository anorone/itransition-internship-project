import { Switch } from "antd";

const ThemeSwitcher = () => (
  <Switch
    className="theme-switcher"
    checkedChildren="Light"
    unCheckedChildren="Dark"
    defaultChecked={true}
  />
);

export default ThemeSwitcher;
