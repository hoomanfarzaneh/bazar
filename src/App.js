import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.scss'
import Home from './pages/home/Home';
import Single from './pages/single/Single'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/single" element={<Single />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
