import './App.css';
import Background from '../components/Background/Background';
import Projects from '../components/Background/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/portfolio" element={<Background />} />
              <Route path="/portfolio/projects" element={<Projects />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
