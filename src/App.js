import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';


function App() {
  return (
    <>
      <div className="App">
        <SideBar />
        <div className='background'>
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
