import './App.css';
import Background from '../components/Background/Background';
import Projects from '../components/Background/Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="App-main">
        <Background />
      </div>
    </>
  );
}

export default App;
