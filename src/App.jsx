import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
const slides = [
    <>
      <img src="/1.HEIC" alt="image" />
      <img src="/2.JPEG" alt="image" />
      <img src="/3.JPEG" alt="image" />
      <img src="/4.JPEG" alt="image" />
      <img src="/5.JPEG" alt="image" />
      <img src="/6.JPEG" alt="image" />
      <img src="/7.JPEG" alt="image" />
      <img src="/8.JPEG" alt="image" />
      <img src="/9.JPEG" alt="image" />
      <img src="/10.HIEC" alt="image" />
      <img src="/11.JPEG" alt="image" />
      <img src="/12.JPEG" alt="image" />
      <img src="/13.JPEG" alt="image" />
    </>
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />

      </div>
    </>
  )
}

export default App
