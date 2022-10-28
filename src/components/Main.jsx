import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/views/HomePage';
import ItemPage from '../components/views/ItemPage';
import CollectionPage from '../components/views/CollectionPage';
import SearchResults from '../components/views/SearchResults';

const Main = () => (
  <main className="main">
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  </main>
);

export default Main;
