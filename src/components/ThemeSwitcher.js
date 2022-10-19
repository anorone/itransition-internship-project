import { Switch } from "antd";

const ThemeSwitcher = () => {
  const toggleThemes = () => {
    const app = document.body;
    app.classList.toggle('dark-theme');
    app.classList.toggle('light-theme');
  };

  return (
    <Switch
      className="theme-switcher"
      checkedChildren="Light"
      unCheckedChildren="Dark"
      defaultChecked={true}
      onChange={toggleThemes}
    />
  );
};

export default ThemeSwitcher;
