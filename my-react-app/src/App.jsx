import { useState } from 'react'
import HeroSection from './hero'
import './App.css'
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from './about';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<HeroSection/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  )
}

export default App
