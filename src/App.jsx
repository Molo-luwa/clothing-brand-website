import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Footerr from './components/Footerr.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/shop" element={<ProductGrid />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>

      <Footerr />
    </div>
  )
}

export default App