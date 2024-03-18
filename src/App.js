import {Routes, Route, Router} from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
