import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Campos from './pages/Campos'
import Galeria from './pages/Galeria'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/campos" element={<Campos />} />
      <Route path="/galeria" element={<Galeria />} />
    </Routes>
  )
}
