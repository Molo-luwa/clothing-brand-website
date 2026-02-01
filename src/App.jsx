import './App.css'
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx';
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        
        <Slider />
      </div>
    </>
  )
}

export default App
