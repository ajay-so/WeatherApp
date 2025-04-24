import './App.css';
import NavBar from "./navbar.jsx";
import WeatherApp from './WeatherApp.jsx';
import Footer from './footer.jsx';

function App() {

  return (
    <>
      <NavBar />
      <WeatherApp />
      <div className='mt-2'>
      <Footer />
      </div>
      
    </>
  )
}

export default App
