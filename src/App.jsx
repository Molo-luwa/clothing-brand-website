import './App.css'
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx';
import Footerr from './components/Footerr.jsx';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-black text-white">
        
        <Navbar />
        
        <Slider />

        <Footerr />

      </div>
    </>
  )
}

export default App
