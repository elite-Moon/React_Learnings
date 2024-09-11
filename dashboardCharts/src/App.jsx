import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<DashBoard />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
