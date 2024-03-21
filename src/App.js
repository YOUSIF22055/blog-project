import {Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/blog/id" element={<ArticleDetailPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
