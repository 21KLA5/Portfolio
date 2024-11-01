import './App.css';
import Background from '../components/Background/Background';
import Projects from '../components/Background/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Background />} />
              <Route path="/projects" element={<Projects />} />
              {/* Add other routes here if needed */}
          </Routes>
      </Router>
    </>
  );
}

export default App;
