import './App.css';
import SideBar from './components/SideBar/SideBar';
import Header from './components/sections/Header/Header';
import AboutMe from './components/sections/AboutMe/AboutMe';


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
