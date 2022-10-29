import './App.less';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { enMessages, ruMessages } from './localizations';

const messages = {
  en: enMessages,
  ru: ruMessages,
};

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('app-lang') ?? 'en');
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') ?? 'dark');

  const toggleLanguages = (lang) => {
    setLanguage(lang);
    localStorage.setItem('app-lang', lang);
  };

  const toggleThemes = () => {
    const color = (theme === 'dark' ? 'light' : 'dark');
    setTheme(color);
    localStorage.setItem('app-theme', color);
  };

  return (
    <BrowserRouter>
      <IntlProvider locale={language} messages={messages[language]} >
        <div className={`${theme} app`}>
          <Header toggleThemes={toggleThemes} toggleLanguages={toggleLanguages} />
          <Main />
          <Footer />
        </div>
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;
