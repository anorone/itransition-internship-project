import './App.less';
import { useState } from 'react';
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
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('dark');

  const toggleThemes = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <IntlProvider locale={language} messages={messages[language]} >
      <div className={theme}>
        <Header toggleThemes={toggleThemes} setLanguage={setLanguage} />
        <Main />
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
