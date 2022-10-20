import './App.less';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleThemes = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className={theme}>
      <Header toggleThemes={toggleThemes} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
