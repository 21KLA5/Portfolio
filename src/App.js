import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <>
    <SideBar />
      <div className="App-main">
        <div className='background'>
          <Header />
        </div>
        <div>
        </div>
      </div>
      <div className='AboutMe'>
        <AboutMe />
      </div>
    </>
  );
}

export default App;
